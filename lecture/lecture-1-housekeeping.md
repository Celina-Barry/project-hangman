---
marp: true
---

# React State

---

## 🏠Housekeeping: Composing styles

Is there a better way to write this?

```js live=true
const Button = styled.button`
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  background: #eee;
`;

const BlueButton = styled.button`
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  background: #2b00d7;
  color: #fff;
`;

render(
  <>
    <Button>Button 1</Button>
    <BlueButton>Button 2</BlueButton>
  </>
);
```

---

## Exercise

What does the `&` signify, in this snippet?

```jsx
const ListItem = styled.li`
  border-bottom: 1px solid;

  &:last-of-type {
    border-bottom: none;
  }
`;
```
