import Splash from './components/pages/store-splash';
import background from '/src/assets/img/bg.jpg'

import '/src/styles/app.css'

function App() {

  return (
  <>
  <Splash linkTo="store/product-page" backgroundURL={background}/>
  </>);
}

export default App;



/*
Attributions for putting in later


<a href="https://www.flaticon.com/free-icons/vegetables" title="vegetables icons">Vegetables icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>


Photo by <a href="https://unsplash.com/@jezar?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jezael Melgoza</a> on <a href="https://unsplash.com/photos/person-in-white-top-HYQvV8wWX18?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  

*/