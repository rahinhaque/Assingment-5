1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer : In JavaScript, getElementById selects a single element by its unique ID, while getElementsByClassName returns all elements with a given class as an HTMLCollection. querySelector returns the first element that matches a CSS selector, and querySelectorAll returns all matches as a NodeList (which is easier to loop through). In short, use getElementById for unique items, getElementsByClassName for class groups, and querySelector/querySelectorAll when you need the flexibility of CSS selectors.

2.How do you create and insert a new element into the DOM?
answer :1. Create a new element with document.createElement().

2.Set its content or attributes (e.g., textContent, className, id).

3.Insert it into the DOM using methods like appendChild(), prepend(), or insertBefore().


3.What is Event Bubbling and how does it work?
Answer : Event Bubbling is how events in the DOM propagate. When you click an element, the event first runs on that element, then “bubbles up” to its parent, then the parent’s parent, and so on, until it reaches the document. For example, if you click a button inside a <div>, the click event is triggered on the button, then on the <div>, then on <body>, and finally on the document. This behavior allows you to attach a single event listener on a parent element and handle events from its children (a technique called event delegation).

4. What is Event Delegation in JavaScript? Why is it useful?
5. Answer : Event Delegation is a technique in JavaScript where instead of adding event listeners to multiple child elements, you add a single listener to their parent and let events “bubble up.” The parent can detect which child triggered the event using properties like event.target. This is useful because it improves performance (fewer event listeners), makes code cleaner, and works even for dynamically added elements.

6. 5. What is the difference between preventDefault() and stopPropagation() methods?
   6. Answer : In JavaScript, preventDefault() stops the browser’s default behavior for an event (e.g., stopping a form from submitting, or a link from navigating). On the other hand, stopPropagation() prevents the event from bubbling up (or capturing down) the DOM tree, so parent elements won’t receive the event. In short: preventDefault() controls what the browser does, while stopPropagation() controls how the event travels through the DOM.
