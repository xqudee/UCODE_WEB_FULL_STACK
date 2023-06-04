var characters = document.getElementById('characters');
var listItems = characters.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++) {
    let item = listItems[i];

    if (!item.hasAttribute('class') || 
    !(['good', 'evil', 'unknown'].includes(item.getAttribute('class')))) {
        item.setAttribute('class', 'unknown');
    }

    if (!item.hasAttribute('data-element')) {
        item.setAttribute('data-element', 'none');
    }

    const elementsArr = item.getAttribute('data-element').split(' ');
    const circleDiv = document.createElement('div');

    elementsArr.forEach((element) => {
        const circle = document.createElement('div');

        circle.className = `elem ${element}`;
        if (elementsArr.includes('none')) {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'line';
            circle.append(lineDiv);
        }

        circleDiv.append(circle);
    })
    
    item.append(circleDiv);

}
