const panelWidthControl = document.querySelector('#panel-width');
const panelWidthValue = document.querySelector('#panel-width-value');

const redInput = document.querySelector('#red');
const greenInput = document.querySelector('#green');
const blueInput = document.querySelector('#blue');

let red = 31;
let green = 34;
let blue = 40;


if (panelWidthControl && panelWidthValue) {

    const setLeftPanelWidth = (value) => {
        const widthInPx = `${value}px`;

        document.documentElement.style.setProperty(
            '--left-panel-width',
            widthInPx
        );

        panelWidthValue.textContent = widthInPx;
    };

    panelWidthControl.addEventListener('input', (event) => {
        const nextValue = Number(event.target.value);

        setLeftPanelWidth(nextValue);
    });
}


const setBackgroundColor = () => {

    document.documentElement.style.setProperty(
        '--left-panel-background-color',
        `rgb(${red}, ${green}, ${blue})`
    );

};


redInput.addEventListener('input', (event) => {
    red = Number(event.target.value);

    setBackgroundColor();
});


greenInput.addEventListener('input', (event) => {
    green = Number(event.target.value);

    setBackgroundColor();
});


blueInput.addEventListener('input', (event) => {
    blue = Number(event.target.value);

    setBackgroundColor();
});


setBackgroundColor();