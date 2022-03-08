import './App.css';

function App() {
  return (
    <div className="App">
      <MainContent />
      <SubContent />
    </div>
  );
}

function MainContent() {
  return (
    <div className="MainContent">
      <h1>Main Content</h1>
      <p>This is the main content section of the app.</p>
      <p>Etiam feugiat dolor ac nunc placerat, nec venenatis diam viverra. Sed id lectus ex. Cras tempor eros et 
        eros ornare, id tincidunt felis ornare. Vestibulum sed orci commodo, euismod sem laoreet, feugiat nibh. 
        In non libero sed nulla semper posuere. Donec id nibh odio. Nullam sit amet egestas libero.</p>
    </div>
  )
}

function SubContent() {
  return (
    <div className="SubContent">
      <h2>Sub Content</h2>
      <p>This is the sub content section of the app.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis dolor eu nisl hendrerit tincidunt. 
        Pellentesque faucibus massa nec dolor scelerisque malesuada. Sed molestie interdum justo ac laoreet. 
        Nullam id leo iaculis, maximus quam in, convallis libero. Curabitur nulla neque, gravida vitae dignissim sed, 
        tempor sit amet diam. Phasellus tincidunt ligula tellus, gravida feugiat augue sagittis eu. Lorem ipsum dolor 
        sit amet, consectetur adipiscing elit. Ut pretium ante et felis faucibus iaculis. In egestas mi neque. 
        Pellentesque blandit arcu ac massa egestas, quis mattis sem porta.</p>
    </div>
  )
}

export default App;
