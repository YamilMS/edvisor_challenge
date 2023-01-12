import React from "react";


//create your first component
const Home = () => {
	const prueba = ()=>{
		console.log('HEYYY')
	}
	return (
		<div>

			{/*THIS IS THE PSEUDO NAVBAR*/}
			<nav className="navbar bg-body-tertiary">
  				<div className="container-fluid">
    				<a className="navbar-brand d-flex my-auto" href="#">
						<span className="material-icons mt-1 mx-2">
							star
						</span>
						<div>Estudiar - Mexico City</div>
					</a>
					<a href="#">Back to Edvisor for Agents</a>
  				</div>
			</nav>

			{/*THIS IS SEARCH INPUTS GROUP*/}
			<div className="container">
				<div className="row">
					<div className="col form-floating">
						<select className="form-select form-select-lg h-100" aria-label=".form-select-lg example">
							<option defaultValue >Country</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
						<label className="mx-3" htmlFor="floatingSelect">Destination</label>
					</div>
					<div className="col form-floating">
						<select className="form-select form-select-lg h-100" aria-label=".form-select-lg example">
							<option defaultValue >Provider</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
						<label className="mx-3" htmlFor="floatingSelect">Provider</label>
					</div>
					<div className="col form-floating">
						<select className="form-select form-select-lg h-100" aria-label=".form-select-lg example">
							<option defaultValue >Weeks</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
						<label className="mx-3" htmlFor="floatingSelect">Min. number of weeks</label>
					</div>
					<div className="col align-self-center">
						<button type="button" className="btn btn-primary my-auto" onClick={prueba}>
						<div className="d-flex">
							<span className="material-icons">
								search
							</span>
							<div>
								Search
							</div>
						</div>
						</button>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Home;
