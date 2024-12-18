import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'
import { describe, expect, it } from 'vitest'

// describe('App', () => {
//     it('renders the App component', () => {
//         render(<App />)

//         screen.debug(); // prints out the jsx in the App component unto the command line
//     })
//     it('renders Vite and React logos', () => {
//         render(<App />);

//         // Check if the Vite logo is in the document
//         const viteLogo = screen.getByAltText('Vite logo');
//         expect(viteLogo).toBeInTheDocument();

//         // Check if the React logo is in the document
//         const reactLogo = screen.getByAltText('React logo');
//         expect(reactLogo).toBeInTheDocument();
//     });

//     it('renders the button with the correct initial count', () => {
//         render(<App />);

//         // Check if the button displays the correct initial count (0)
//         const button = screen.getByRole('button');
//         expect(button).toHaveTextContent('count is 0');
//     });

//     it('increments the count when the button is clicked', () => {
//         render(<App />);

//         // Get the button and simulate a click
//         const button = screen.getByRole('button');
//         fireEvent.click(button);

//         // Check if the count incremented after one click
//         expect(button).toHaveTextContent('count is 1');

//         // Simulate another click and check if the count increments again
//         fireEvent.click(button);
//         expect(button).toHaveTextContent('count is 2');
//     });

//     it('renders the "Edit src/App.jsx" text', () => {
//         render(<App />);

//         // Check if the text Edit src/App.jsx is rendered
//         const editText = screen.getByText("Vite + React");
//         expect(editText).toBeInTheDocument();
//     });
// })

describe('Increase Test', () => {
    it("increases", () => {
        render(<App />)
        const btn = screen.getByTestId("inc");

        fireEvent.click(btn)

        const text = screen.getByText("1");

        expect(text).toBeInTheDocument();
    })
})

describe('Decrease Test', () => {
    it("increases", () => {
        render(<App />)
        const btn = screen.getByTestId("dec");

        fireEvent.click(btn)

        const text = screen.getByText("-1");

        expect(text).toBeInTheDocument();
    })
})