import React from "react";

const Home = () => {
	return (
		<div className="min-h-screen">
			<div className=" flex justify-center mt-10">
				<div class="card w-96 bg-base-100 shadow-xl pl-5">
					<div class="card-body">
						<div class="form-control ">
							<label class="input-group">
								<input
									type="text"
									placeholder="Write your message"
									class="input input-bordered"
								/>
								<span>Add</span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
