const Shipping = () => {
 return (
    <div className="text-grey-D9 py-6 px-4">
			<h1 className="text-3xl text-center font-source">Shipping Policy</h1>
			<div className="text-justify text-sm pt-2 font-signika">
				<p>
					Thank you for considering [Store Name] for your fashion
					needs. We aim to provide a seamless and reliable shopping experience, including a transparent shipping process. Please review our shipping policy to understand how we handle the delivery of your orders.
				</p>

				<h2 className="text-base pt-1 font-semibold">Order Processing:</h2>
				<p>All orders are processed within 1-2 business days after payment confirmation.</p>
				<p>Orders placed on weekends or public holidays will be processed on the next business day.</p>

                <h2 className="text-base pt-1 font-semibold">Shipping Methods:</h2>
				<p>We offer standard and expedited shipping options for all orders.</p>
                <p>Shipping costs and delivery times vary based on the destination and selected shipping method.</p>
                <h2 className="text-base pt-1 font-semibold">Shipping Costs:</h2>
				<p>Shipping costs are calculated at checkout based on the shipping method, destination, and order weight.</p>
                <p>
                Free shipping may be available for orders that meet specified criteria during promotional periods.
                </p>
                <h2 className="text-base pt-1 font-semibold">Address Accuracy:</h2>
				<p>Customers are responsible for providing accurate shipping information.</p>
                <p>Ensure your delivery address is complete and correct to prevent delays or misdeliveries.</p>
                <p className="pt-2">If you have any questions or concerns about our shipping policy, please contact our customer support team at support@[storename].com. </p>
                <p className="pt-2">
                    Thank you for choosing [Store Name]. We appreciate your trust and hope you enjoy your fashion finds!</p>
			</div>
		</div>
 )
}
export default Shipping;