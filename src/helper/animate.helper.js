/* global performance, requestAnimationFrame */

class AnimateHelper {
    constructor(duration = 610) {
        this.duration = duration;
    }

    render(callback, duration = this.duration) {
        this.animate({
            duration,
            timing: function timing(timeFraction) {
                return timeFraction ** 2;
            },
            draw: function progrerss(progress) {
                callback(progress);
            }
        });
    }

    animate({ timing = () => {}, draw = () => {}, duration = this.duration }) {
        const start = performance.now();

        requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;
            timeFraction = timeFraction > 1 ? 1 : timeFraction;
            const progress = timing(timeFraction);
            draw(progress);
            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        });
    }
}

export default AnimateHelper;
