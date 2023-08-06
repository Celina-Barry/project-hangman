---
marp: true
---

# React Class Components

---

# History

React was released in 2013.

There have been a few iterations. Until quite recently, the main way to create components was with **classes**.

---

```jsx live=true
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        Count: {this.state.count}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
      </>
    );
  }
}

render(<Counter />);
```

---

# Don't worry too much

We're focusing on _hooks_ in this course.

Hooks can _only_ be used inside **function components**

---

It's important to be aware of classes, since many online resources will use them.

---

# Cheatsheet

```jsx
const [count, setCount] = useState(0);

// Initialization
useState(0) === this.state = { count: 0 };

// Accessing the state value
count === this.state.count;

// Updating the state value
setCount(count + 1) === this.setState({ count: this.state.count + 1 });
```

---

# Exercise

Determine what gets rendered

---

```jsx live=true clickToReveal=true
class Temperature extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      t: 32,
    };
  }

  render() {
    return <p>Temperature: {this.state.t + 5}</p>;
  }
}

render(<Temperature />);
```

---

```jsx live=true clickToReveal=true
class Temperature extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      t: this.props.initialT,
    };
  }

  render() {
    // Not actually the right formula
    const temperatureInFahrenheit = this.state.t * 0.5 + 32;

    return <p>Temperature: {temperatureInFahrenheit}</p>;
  }
}

render(<Temperature initialT={-10} />);
```

---

After clicking the button **once**.

```jsx live=true clickToReveal=true
class Temperature extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      t: this.props.initialT,
    };
  }

  render() {
    // Not actually the right formula
    const temperatureInFahrenheit = this.state.t * 0.5 + 32;

    return (
      <div>
        <p>Temperature: {temperatureInFahrenheit}</p>
        <button
          onClick={() =>
            this.setState({
              t: this.state.t + 10,
            })
          }
        >
          Make it hotter
        </button>
      </div>
    );
  }
}

render(<Temperature initialT={0} />);
```
