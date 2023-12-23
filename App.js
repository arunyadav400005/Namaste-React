const element = React.createElement('div',{id: "parent"},
                [React.createElement('div',{id: "child1", className: "child2"},
                [React.createElement('h1',{},'this is heading h1.'),React.createElement('h2',{},'this is heading h2.')])],React.createElement('div',{id: "child2", className: "child2"},
                [React.createElement('h1',{},'this is heading h1.'),React.createElement('h2',{},'this is heading h2.')]));

                const root = ReactDOM.createRoot(document.querySelector("#root"));
                root.render(element);