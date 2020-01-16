class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    }
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility 
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Detail' : 'Show Details'}</button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById('app');

// render();