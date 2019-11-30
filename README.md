# Modal Window

#### Description:
   A simple version of a modal window.  Open the prepared modal window when you click an item on a website.
   
## How to use:
- **create**:
```javascript
   import { ModalWindow } from './script';
   const modal = new ModalWindow(selector);
```
`selector` - modal container class, default value `overlay`
- **add event to item**:
```javascript
    modal.aplly(element);
```
`element` - selector(class) of one or more elements that will cause a modal window
- **close**:

_modal window will be closed when clicked outside, but you can also add an element to close it:_
```javascript
    const modal = new ModalWindow('overlay', 'close');
```
`overlay` - modal window class
`close` - close element class

Example:
```html
<div class="overlay">
    <div class="close">&times;</div>
    <div>
        ... other content
    </div>
</div>
```
