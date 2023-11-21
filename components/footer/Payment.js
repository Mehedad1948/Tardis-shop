export default function Payment() {
    return (
        <div className='mt-2'>
            <h3 className='text-sm'>WE ACCPET</h3>
            <div className='flex items-center gap-4 flex-wrap'>
                <img className='rounded' src="/images/payment/visa.webp" alt="" />
                <img className='rounded' src="/images/payment/mastercard.webp" alt="" />
                <img className='rounded' src="/images/payment/paypal.webp" alt="" />
            </div>
        </div>
    );
}
