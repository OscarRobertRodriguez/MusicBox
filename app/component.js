// export default (text = 'Hello world') => {
//   const element = document.createElement('div');

//   element.innerHTML = text;

//   return element;
// };

export default function () {
    const text = 'Hello World';
    const element = document.createElement('div');

    element.innerHTML = text;

    return element; 
}