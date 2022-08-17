class BloomPassPawn {
    setup() {
        const THREE = Worldcore.THREE;
        const { renderer, composer } = this.service("ThreeRenderManager");

        // tweak these values to get a different looking bloom effect
        const params = {
            exposure: 1,
            bloomStrength: 1.5,
            bloomThreshold: 0,
            bloomRadius: 0,
        };

        if (!this.bloomPass) {
            this.bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(256, 256), 0, 0, 0);
            composer.addPass(this.bloomPass);
        }

        renderer.toneMappingExposure = params.exposure;
        this.bloomPass.threshold = params.bloomThreshold;
        this.bloomPass.strength = params.bloomStrength;
        this.bloomPass.radius = params.bloomRadius;
    }
}

export default {
    modules: [
        {
            name: "BloomPass",
            actorBehaviors: [],
            pawnBehaviors: [BloomPassPawn]
        }
    ]
}
