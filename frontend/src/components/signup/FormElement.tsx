

const FormElement = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('Form submitted');
    };

    return (
        <div className="bg-white w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="font-bold text-black text-4xl">Create an account</h1>
            <h6 className="text-gray-700 text-lg mt-1 mb-2">Already have an account? <span className="underline">Login</span></h6>
            <form className="flex flex-col w-full max-w-96" onSubmit={handleSubmit}>
                <div className="flex flex-col mt-2 w-full mt-3">
                    <label className="text-black font-sans font-medium mb-1">username</label>
                    <input placeholder="Enter you username" type="text" className="border-2 h-9 w-full border-slate-100 rounded" />
                </div>
                <div className="flex flex-col mt-2 w-full">
                    <label className="font-sans font-medium mb-1">Name (optional)</label>
                    <input placeholder="Enter you name" type="text" className="border-2 h-9 w-full border-slate-100 rounded" />
                </div>
                <div className="flex flex-col mt-2 w-full">
                    <label className="font-sans font-medium mb-1">Password</label>
                    <input placeholder="Enter you password" type="password" className="border-2 h-9 w-full border-slate-100 rounded" />
                </div>
                <div className="w-full">
                    <button type="submit" className="text-white	border-0 h-9 mt-3 w-full rounded bg-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FormElement;
