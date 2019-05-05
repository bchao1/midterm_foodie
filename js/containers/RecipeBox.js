import React from 'react';
import Button from '@material-ui/core/Button';

const styles = {
	box: {
		height: "300px",
	},
	button: {
        width: '100%',
        fontWeight: '1',
		backgroundColor: 'rgb(234, 236, 239)',
		fontFamily: "Bree Serif"
    },
}
class RecipeBox extends React.Component {
    render(){
        return(
            <div className="col-4 col-12-medium">
			    <section className="box feature">
					<a href="#" className="image featured"><img src={this.props.item.img} alt="" /></a>
					<div style={styles.box} className="inner">
						<header>
							<div className="title-box">
								<h2>{this.props.item.title}</h2>
							</div>
							<div className="box-container">
								<div className="image-box">
									<a 
										href={this.props.item.link} 
										className="image featured"
									>
										<img src="images/tasty-logo.jpg" alt="" />
									</a>
								</div>
							</div>
						</header>
						<Button 
							variant="contained"
							style={styles.button}
                        >
                            View Recipe and Save
                        </Button>
					</div>
				</section>
			</div>
        );
    }
}

export default RecipeBox;