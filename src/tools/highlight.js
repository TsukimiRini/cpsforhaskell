import hljs from 'highlight.js'
import 'highlight.js/styles/vs.css'

const install = function (app) {
    app.directive('highlight', {
        // Directive has a set of lifecycle hooks:
        // called before bound element's parent component is mounted
        beforeMount(el) {
            // on first bind, highlight all targets
            let blocks = el.querySelectorAll('pre code');
            for (let i = 0; i < blocks.length; i++) {
                let item = blocks[i]
                console.log(item)
                hljs.highlightBlock(item)
            }
        },
        // called after the containing component's VNode and the VNodes of its children // have updated
        updated(el, binding) {
            // after an update, re-fill the content and then highlight
            let targets = el.querySelectorAll('code');
            for (let i = 0; i < targets.length; i += 1) {
                let target = targets[i];
                if (typeof binding.value === 'string') {
                    target.textContent = binding.value;
                }
                hljs.highlightBlock(target);
            }
        }
    })
}

export default {
    install
}