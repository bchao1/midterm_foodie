import React from 'react';

const styles = {
	banner: {
		fontSize: "2em",
	}
}

class Banner extends React.Component {
    render(){
        return(
                <div id="banner-wrapper">
					<div id="banner" className="box container">
						<div className="row">
							<div className="col-7 col-12-medium">
								<h2>This is Foodie.</h2>
								<p>Find recipes, cook-alongs, or create your own dishes!</p>
							</div>
							<div className="col-5 col-12-medium">
								<ul>
									<li><a href="#" className="button large icon " style={styles.banner}>Create a Recipe</a></li>
									<li><a href="#" className="button alt large" style={styles.banner}>Feeling Lucky</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
        );
    }
}

export default Banner;