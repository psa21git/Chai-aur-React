function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // domElement.target = reactElement.props.target
    // domElement.href = reactElement.props.href
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        else {
            domElement.setAttribute(prop,reactElement.props[prop])
        }
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: "Click on me to get into Google"
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)