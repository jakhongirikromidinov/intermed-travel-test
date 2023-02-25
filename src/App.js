import GlobalStyle from "./GlobalStyles";
import FontStyles from "./FontStyles";
import Hotels from "./components/Hotels/Hotels";
import Choice from "./components/Choice/Choice";
import Tours from "./components/Tours/Tours";
import News from "./components/News/News";
import Reviews from "./components/Reviews/Review";
import Offers from "./components/Offers/Offers";

import { Layout } from "./components/Common/Common";
function App() {
	return (
		<Layout>
			<FontStyles />
			<GlobalStyle />

			<Tours />
			<Hotels />
			<Offers />
			{/* <Choice /> */}
			<Reviews />
			<News />
		</Layout>
	);
}

export default App;
