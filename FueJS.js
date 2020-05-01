function FueJS() {
    this.createStyle = function (cssText) {
        const head = document.head || document.getElementsByTagName('head')[0],
              style = document.createElement('style');
        head.appendChild(style);
        style.type = 'text/css';
        if (style.styleSheet) {
            // This is required for IE8 and below.
            style.styleSheet.cssText = cssText;
            
        } else {
            style.appendChild(document.createTextNode(cssText));
        }
    }
    this.createElement = function (type,props,children){
        const element = document.createElement(type);
        props = props || {}
        for(let i = Object.keys(props).length - 1 ; i >= 0 ; i--){
            let propKey = Object.keys(props)[i];
            if (propKey === 'style') {
                Object.assign(element.style, props.style);
            }else if (typeof props[propKey] === 'function') {
                element[propKey] = props[propKey];
            } else {
                element.setAttribute(propKey,props[propKey])
            }
        }
        if (children){
            if (Array.isArray(children)) {
                for (let index = children.length - 1; index >= 0; index--) {
                    const child = children[index];
                    element.prepend(typeof child === 'string' ? document.createTextNode(child) : child)
                }
            } else {
                element.appendChild(typeof children === 'string' ?  document.createTextNode(children) : children)
            }
        }
        return element
    }
}
