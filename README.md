Created a simple counter. 

● A click counter component for React that increments the count when clicked and held down

● The count increments by 1 when clicked, increments by 1 every 200 milliseconds when held down for less than 5 seconds, increments by 5 when held down for more than 5 seconds and increments by 50 when held down for more than 10 seconds

● Uses React Hooks (useState and useEffect) to manage the state of the count and whether the button is being pressed

● Uses onMouseDown, onMouseUp, onMouseLeave events to keep track of the button press, release and leave events

● Uses new state startTime that keeps track of the time when the button is first pressed

● Stops counting and clears the interval when the button is released or the mouse leaves the button

● Easily customizable to fit specific requirements

● This component can be used in a React application

<img src="https://user-images.githubusercontent.com/104409753/213861018-1e0f9c47-2e63-4d6c-821d-9b33fb33cd4f.mp4" autoplay loop muted>



