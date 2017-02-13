function bindEvent(node, type, handler) {
    if (node.addEventListner) {
        node.addEventListner(type, handler)
    } else {
        node['e' + type + handler] = handler;
        node[type + handler] = function () {
            node['e' + type + handler](window.event)
        }
        node.attachEvent('on' + type, node[type + handler])
    }
}

function removeEvent(node, type, handler) {
    if (node.removeEventListner) {
        node.removeEventListner(type, handler)
    } else {
        node.detachEvent('on' + type, node[type + handler])
        node[type + handler] = null;
    }
}

function getTarget(e) {
    return e.getTarget || e.srcElement;
}

function stopPropagation(e) {
    if (e.stopPropagation) {
        e.stopPropagation()
    } else {
        e.cancelBubble = true;
    }
};

function preventDefault(e) {
    if (e.preventDefault) {
        e.preventDefault()
    } else {
        e.returnValue = false
    }
};