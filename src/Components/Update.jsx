import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();

    const handleUpadate = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        console.log(name, email)
        const updatedUser = {name, email}

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('data modified successfully')
            }
        })
    }

    return (
        <div>
            <div className="flex">
                <Link to="/users"><button>Go User List</button></Link>
                <h3 className="text-3xl ml-4">Update information : {loadedUser.name}</h3>
            </div>
            <form onSubmit={handleUpadate}>
                <p className="text-xl">Name: </p>
                <input type="text" name="name" defaultValue={loadedUser?.name} />
                <br /><br />
                <p className="text-xl">Email</p>
                <input type="text" name="email" defaultValue={loadedUser?.email} />
                <br /><br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Update;