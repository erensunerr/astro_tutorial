import Matter from "matter-js";
import {useEffect} from "react";

function PhysicsSimulation() {
    useEffect(
        () => {
            // module aliases
            var Engine = Matter.Engine,
                Render = Matter.Render,
                Runner = Matter.Runner,
                Bodies = Matter.Bodies,
                Composite = Matter.Composite;

            // create an engine
            var engine = Engine.create();

            // console.log(window.innerWidth)
            // create a renderer
            var render = Render.create({
                canvas: document.getElementById("canvas"),
                engine: engine,
                options: {
                    width: window.innerWidth,
                    height: window.innerHeight - 6*16,
                }
            });

            // create two boxes and a ground
            var boxA = Bodies.rectangle(400, 200, 80, 80);
            var boxB = Bodies.rectangle(450, 50, 80, 80);
            var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

            // add all of the bodies to the world
            Composite.add(engine.world, [boxA, boxB, ground]);

            // run the renderer
            Render.run(render);

            // create runner
            var runner = Runner.create();

            // run the engine
            Runner.run(runner, engine);
        }
    )
    return (

        <canvas style={{
            position: "fixed",
            left: 0,
            top: "6rem",
        }} id="canvas" width="100vw" height="100vh"/>

    )
}

export default PhysicsSimulation;
