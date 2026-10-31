import { useEffect, useRef, useState } from "react";

export function Hologram({ calm, mode }: { calm: boolean; mode: number }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const settings = useRef({ calm, mode });
  const target = useRef({ x: -.2, y: .3 });
  const [ready, setReady] = useState(false);
  settings.current = { calm, mode };
  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};
    import("three").then(T => {
      const element = canvas.current;
      if (!element || cancelled) return;
      const context = element.getContext("webgl2", { alpha: true, antialias: true });
      if (!context) return;
      const renderer = new T.WebGLRenderer({ canvas: element, context, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(38, 1, .1, 80);
      camera.position.z = 9.5;
      const orbit = new T.Group();
      scene.add(orbit);
      const wire = new T.LineBasicMaterial({ color: "#8ce3d5", transparent: true, opacity: .36 });
      const geometry = new T.IcosahedronGeometry(1.53, 2);
      orbit.add(new T.LineSegments(new T.EdgesGeometry(geometry), wire));
      const core = new T.Mesh(new T.IcosahedronGeometry(1.48, 1), new T.MeshBasicMaterial({ color: "#173c40", transparent: true, opacity: .19 }));
      orbit.add(core);
      const rings = new T.Group();
      for (let i = 0; i < 3; i++) {
        const ring = new T.Mesh(new T.TorusGeometry(2.05 + i * .26, .007, 4, 180), new T.MeshBasicMaterial({ color: i === 1 ? "#c6b5f5" : "#6d9da2", transparent: true, opacity: .46 }));
        ring.rotation.set(.65 + i * .5, .3 + i * .9, i * .8);
        rings.add(ring);
      }
      orbit.add(rings);
      let seed = 42;
      const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      const count = window.innerWidth < 700 ? 700 : 1300;
      const points = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const a = random() * Math.PI * 2, b = Math.acos(2 * random() - 1), r = 1.6 + random() * .3;
        points.set([Math.sin(b) * Math.cos(a) * r, Math.cos(b) * r, Math.sin(b) * Math.sin(a) * r], i * 3);
      }
      const starsGeometry = new T.BufferGeometry();
      starsGeometry.setAttribute("position", new T.BufferAttribute(points, 3));
      const starsMaterial = new T.PointsMaterial({ color: "#acffed", size: .019, transparent: true, opacity: .85 });
      const stars = new T.Points(starsGeometry, starsMaterial);
      orbit.add(stars);
      const satellite = new T.Mesh(new T.SphereGeometry(.06, 10, 8), new T.MeshBasicMaterial({ color: "#efb178" }));
      scene.add(satellite);
      const resize = () => {
        const box = element.getBoundingClientRect();
        renderer.setSize(box.width, box.height, false);
        camera.aspect = box.width / Math.max(box.height, 1); camera.updateProjectionMatrix();
      };
      const observer = new ResizeObserver(resize); observer.observe(element); resize();
      let visible = true;
      const intersection = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }); intersection.observe(element);
      let frame = 0, previous = 0, time = 0, lastMode = -1, rendered = false;
      const draw = (now: number) => {
        frame = requestAnimationFrame(draw);
        if (!visible || document.hidden || now - previous < 32) return;
        const step = Math.min(now - previous, 60); previous = now;
        if (settings.current.calm && rendered && lastMode === settings.current.mode && Math.abs(orbit.rotation.x - target.current.x) < .001 && Math.abs(orbit.rotation.y - target.current.y - time) < .001) return;
        if (!settings.current.calm) time += step * .00013;
        orbit.rotation.x += (target.current.x - orbit.rotation.x) * .06;
        orbit.rotation.y += (target.current.y + time - orbit.rotation.y) * .045;
        rings.rotation.z = time * .4;
        satellite.position.set(Math.cos(time * 2 + .4) * 2.57, Math.sin(time * 2 + .4) * 1.5, .6);
        core.visible = settings.current.mode !== 2;
        stars.visible = settings.current.mode !== 1;
        wire.opacity = settings.current.mode === 2 ? .8 : .36;
        renderer.render(scene, camera); rendered = true; lastMode = settings.current.mode;
      };
      frame = requestAnimationFrame(draw); setReady(true);
      cleanup = () => {
        cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect();
        geometry.dispose();
        scene.traverse(object => {
          if (object instanceof T.Mesh || object instanceof T.LineSegments || object instanceof T.Points) {
            object.geometry.dispose(); const material = object.material; (Array.isArray(material) ? material : [material]).forEach(m => m.dispose());
          }
        });
        renderer.dispose();
      };
    }).catch(() => { /* The CSS orbit remains available when WebGL is unavailable. */ });
    return () => { cancelled = true; cleanup(); };
  }, []);
  const pointer = useRef<{x:number;y:number}|null>(null);
  return <div className={`holo-stage ${ready ? "is-ready" : ""}`} tabIndex={0} role="img" aria-label="可拖动旋转的三维轨道图形；方向键也可调整视角" onKeyDown={e => { if (["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home"].includes(e.key)) { e.preventDefault(); if(e.key === "Home") target.current={x:-.2,y:.3}; else { target.current.y += e.key === "ArrowLeft" ? -.2 : e.key === "ArrowRight" ? .2 : 0; target.current.x += e.key === "ArrowUp" ? -.2 : e.key === "ArrowDown" ? .2 : 0; } } }} onPointerDown={e => { pointer.current={x:e.clientX,y:e.clientY};e.currentTarget.setPointerCapture(e.pointerId); }} onPointerMove={e => { if (!pointer.current) return; target.current.y += (e.clientX-pointer.current.x)*.008;target.current.x += (e.clientY-pointer.current.y)*.008;pointer.current={x:e.clientX,y:e.clientY}; }} onPointerUp={() => { pointer.current=null; }} onPointerCancel={() => { pointer.current=null; }}>
    <div className="holo-fallback" aria-hidden="true"><i/><i/><i/><span/></div><canvas ref={canvas} aria-hidden="true"/><span className="holo-axis axis-x" aria-hidden="true"/><span className="holo-axis axis-y" aria-hidden="true"/><span className="holo-coordinate">ORBIT STUDY / INTERACTIVE</span>
  </div>;
}
