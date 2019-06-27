/**
 * Implement document.getElementBydId 
 * @param: string: id of the node we are trying to find 
 * @return: node if it is found or null otherwise
 */
document.getElementById = elementId => {

    let match = null;

    function findNode(node) {
        if (!match && node.id === elementId) {
            match = node;
        }
        
        if (!match) {
            [...node.childNodes].find(findNode);
        }
    }

    findNode(document.body);

    return match;
} 