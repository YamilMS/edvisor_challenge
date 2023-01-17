import React, { useState, useEffect} from "react";
import { Country } from "./Country.jsx";
import flag from "../img/mexFlag.jpg"
import file from "../../data2.json"

//create your first component
const Home = () => {
	const [campus, setCampus] = useState([]);
	const [location, setLocation] = useState([]);

	useEffect(()=>{
		setCampus(file.data.getAvailableFiltersForLanguageSearch.campuses)
		setLocation(file.data.getAvailableFiltersForLanguageSearch.locations)
		
		//console.log(location)
	},[])
	console.log(location)
	console.log(campus.map(item=> item.id))
	return (
		<div>

			{/*THIS IS THE PSEUDO NAVBAR*/}
			<nav className="navbar border">
  				<div className="container-fluid">
    				<a className="navbar-brand d-flex my-auto" href="#">
						<span style={{color: " #1b7ced"}} className="material-icons mt-1 mx-2">
							star
						</span>
						<div>Estudiar - Mexico City</div>
					</a>
					<a href="#">Back to Edvisor for Agents</a>
  				</div>
			</nav>
			{/*SIDE BAR CONTENT OF THE APP*/}
			<div id="contentApp" className="row d-flex">
					<div className="col-2 p-0">
						<div className="dropdown p-2">
							<button className="btn dropdown-toggle d-flex justify-content-between align-items-center mx-0 px-3 w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<span className="material-icons">
									search
								</span>
								<div>
									Search
								</div>
							</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">Courses</a></li>
							</ul>
						</div>
					</div>
					{/*MAIN CONTENT OF THE APP*/}

													{/*TABS*/}
					<div id="mainContent" className="col-10 p-0" >
						<div id="containerSearchInputs" className="border mx-5 my-5">
							<ul className="nav nav-tabs d-flex justify-content-between">
								<div className="d-flex">
									<li className="nav-item">
										<a className="nav-link active d-flex align-content-center py-3" aria-current="page" href="#">
											<span className="material-icons" style={{color: "grey"}}>
												chat_bubble_outline
											</span>
											<div className="mx-2">
												Language
											</div>
										</a>
									</li>
									<li className="nav-item" >
										<a className="nav-link d-flex align-content-center py-3" style={{color: "grey"}} href="#">
										<span className="material-icons-outlined">
											school
										</span>
										<div className="mx-2">
											Higher Ed.
										</div>
										</a>
									</li>
								</div>
								<div className="d-flex align-content-center align-self-center px-3">
									<span className="material-icons-outlined" style={{color: "grey", paddingTop:"0.08em"}}>
										person_outline
									</span>
									<div>
									<img src={flag}  className="mx-2" style={{height:"1em", width:"1.5em"}} alt="mexican flag" />
									</div>
									<div className="fw-bold">
										Mexico, Onshore
									</div>
								</div>
							</ul>
												{/*SEARCH INPUTS GROUP*/}
							<div className="d-flex my-3">
								<div className="container">
									<div className="row">
										<Country country={location}/>
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
										<div className="col align-self-center d-flex justify-content-center">
											<button type="button" className="btn btn-primary my-auto d-flex">
												<div className="d-flex justify-content-between w-100">
													<span id="btnSearchInputGroup" className="material-icons">
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
						</div>
					</div>
			</div>

		</div>
	);
};

export default Home;
