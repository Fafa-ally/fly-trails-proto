import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Printer, Download, Smartphone, Building, CreditCard } from 'lucide-react';

const Payment: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'bank' | 'paypal'>('mpesa');
  const [transactionCode, setTransactionCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  // Get order data from state or localStorage
  const getInitialOrder = () => {
    if (state) return state;
    const stored = localStorage.getItem('currentOrder');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse stored order', e);
      }
    }
    return {
      tier: { name: "Explorer", price: 2000 },
      billing: { 
        firstName: "John", 
        lastName: "Kamau", 
        email: "john.kamau@example.com", 
        phone: "+254712345678", 
        address: "Westlands Avenue",
        city: "Nairobi",
        postalCode: "00100",
        country: "Kenya" 
      },
      orderId: `${Math.floor(10000000 + Math.random() * 90000000)}`
    };
  };

  const [order] = useState(getInitialOrder());

  const handleCompleteTransaction = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 2000);
  };

  if (isPaid) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-12 rounded-lg shadow-lg text-center max-w-lg w-full">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Payment Successful!</h2>
          <p className="text-gray-600 mb-8">
            Your payment has been received and is being verified. A receipt has been sent to {order.billing.email}
          </p>
          <button 
            onClick={() => navigate('/')} 
            className="px-8 py-3 bg-gray-900 text-white rounded font-semibold hover:bg-gray-800 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center py-8 px-4 font-sans">
      
      {/* Immersive Background */}
      <div className="fixed inset-0 z-0">
          <img src="/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden relative z-10">
        
        {/* Header Section */}
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            {/* Company Logo */}
            <div className="flex items-center gap-4">
              <img src="/flytrails-logo.png" alt="FlyTrails" className="h-12 w-auto object-contain" />
              <div>
                <p className="text-sm text-gray-600">Adventure. Discovery. Freedom.</p>
              </div>
            </div>
            
            {/* Invoice Status */}
            <div className="mt-6 md:mt-0 text-left md:text-right">
              <div className="text-3xl font-bold text-red-600 mb-2">UNPAID</div>
              <div className="text-sm text-gray-600">Due Date: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')}</div>
            </div>
          </div>

          {/* Invoice Number & Payment Selection */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-gray-900 w-full">Invoice #{order.orderId}</h2>
            
            <div className="flex bg-gray-100 p-1 rounded-lg w-full md:w-auto">
                {(['mpesa', 'bank', 'paypal'] as const).map((method) => (
                    <button
                        key={method}
                        onClick={() => setPaymentMethod(method)}
                        className={`flex items-center gap-2 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest transition-all ${
                            paymentMethod === method 
                            ? 'bg-white text-gray-900 shadow-sm' 
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        {method === 'mpesa' && <Smartphone className="w-3 h-3" />}
                        {method === 'bank' && <Building className="w-3 h-3" />}
                        {method === 'paypal' && <CreditCard className="w-3 h-3" />}
                        {method}
                    </button>
                ))}
            </div>
          </div>

          {/* Payment Instructions Box */}
          <div className="bg-gray-50 border-l-4 border-orange-500 p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-3 underline uppercase">Instructions - How to Pay via {paymentMethod}</h3>
            
            {paymentMethod === 'mpesa' && (
                <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Go to your Sim Toolkit</li>
                    <li>• Select Safaricom then MPesa</li>
                    <li>• Select Lipa na MPesa</li>
                    <li>• Select Pay Bill</li>
                    <li>• Enter Business No as: <strong>522522</strong></li>
                    <li>• Enter Account No as: <strong>{order.orderId}</strong></li>
                    <li>• Enter Amount as: <strong>{order.tier.price}</strong></li>
                    <li>• Enter PIN and Wait for Mpesa Message</li>
                </ul>
            )}

            {paymentMethod === 'bank' && (
                <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Bank: <strong>Equity Bank</strong></li>
                    <li>• Account Name: <strong>Fly Trails Ltd</strong></li>
                    <li>• Account No: <strong>0123 456 789 000</strong></li>
                    <li>• Branch: <strong>Westlands</strong></li>
                    <li>• Reference: <strong>{order.orderId}</strong></li>
                </ul>
            )}

            {paymentMethod === 'paypal' && (
                <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Log in to your PayPal account</li>
                    <li>• Send Payment to: <strong>payments@flytrails.com</strong></li>
                    <li>• Amount: <strong>${Math.ceil(order.tier.price / 130)} USD</strong></li>
                    <li>• Add Message: <strong>Invoice #{order.orderId}</strong></li>
                </ul>
            )}
          </div>

          {/* Transaction Code Entry */}
          <div className="bg-white border border-gray-300 p-6 rounded mb-8">
            <label className="block font-bold text-gray-900 mb-3">
              {paymentMethod === 'mpesa' ? 'Enter M-Pesa Transaction code below:' : 
               paymentMethod === 'bank' ? 'Enter Bank Reference / Transaction ID:' :
               'Enter PayPal Transaction ID:'}
            </label>
            <input
              type="text"
              value={transactionCode}
              onChange={(e) => setTransactionCode(e.target.value.toUpperCase())}
              placeholder={paymentMethod === 'mpesa' ? "e.g. LGR519G2QV" : "Ref Number"}
              className="w-full px-4 py-3 border border-gray-300 rounded text-center text-lg font-mono tracking-wider focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 mb-4"
            />
            <button
              onClick={handleCompleteTransaction}
              disabled={!transactionCode || isProcessing}
              className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Processing...' : 'Complete Transaction'}
            </button>
          </div>

          {paymentMethod === 'mpesa' && (
            <div className="text-center text-sm text-gray-600 mb-8">
                <p className="italic">
                Click here to use M-Pesa Express (STK Push Method) to avoid entering transaction code manually.
                </p>
            </div>
          )}

          {/* Billing Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 pb-8 border-b border-gray-200">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Invoiced To</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p className="font-semibold">{order.billing.firstName} {order.billing.lastName}</p>
                <p>{order.billing.address}</p>
                <p>{order.billing.city}, {order.billing.postalCode}</p>
                <p>{order.billing.country}</p>
              </div>
            </div>

            <div className="text-left md:text-right">
              <h3 className="font-bold text-gray-900 mb-3">Pay To</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p className="font-semibold">FlyTrails Travel Ltd.</p>
                <p>Westlands, Nairobi</p>
                <p>P.O Box 12345-00100</p>
                <p>Nairobi, Kenya</p>
                <p className="mt-2">Phone: +254 700 123 456</p>
                <p>Email: billing@flytrails.com</p>
                <p>Website: www.flytrails.com</p>
              </div>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-4">
              <div>
                <span className="font-bold text-gray-900">Invoice Date</span>
                <p className="text-gray-700">{new Date().toLocaleDateString('en-GB')}</p>
              </div>
              <div className="text-right">
                <span className="font-bold text-gray-900">Payment Method</span>
                <p className="text-gray-700 uppercase">{paymentMethod}</p>
              </div>
            </div>
          </div>

          {/* Invoice Items Table */}
          <div className="bg-gray-50 rounded-lg overflow-hidden mb-8">
            <h3 className="text-xl font-bold text-gray-900 bg-gray-100 px-6 py-4">Invoice Items</h3>
            
            <table className="w-full">
              <thead className="border-b border-gray-300">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-bold text-gray-900">Description</th>
                  <th className="text-right px-6 py-3 text-sm font-bold text-gray-900">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-sm text-gray-700">
                    FlyTrails {order.tier.name} Membership - Annual Subscription (12 Months)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 text-right font-semibold">
                    KSh{order.tier.price.toLocaleString()}.00
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="px-6 py-3 text-sm text-gray-700 text-right font-semibold">Sub Total</td>
                  <td className="px-6 py-3 text-sm text-gray-900 text-right font-semibold">
                    KSh{order.tier.price.toLocaleString()}.00
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="px-6 py-3 text-sm text-gray-700 text-right font-semibold">16.00% VAT</td>
                  <td className="px-6 py-3 text-sm text-gray-900 text-right font-semibold">
                    KSh{(order.tier.price * 0.16).toLocaleString()}.00
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="px-6 py-3 text-sm text-gray-700 text-right font-semibold">Credit</td>
                  <td className="px-6 py-3 text-sm text-gray-900 text-right font-semibold">KSh0.00</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="px-6 py-4 text-base text-gray-900 text-right font-bold">Total</td>
                  <td className="px-6 py-4 text-base text-gray-900 text-right font-bold">
                    KSh{(order.tier.price * 1.16).toLocaleString()}.00
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="px-6 py-4 text-xs text-gray-600 italic border-t border-gray-200">
              * Indicates a taxed item.
            </div>
          </div>

          {/* Transaction History */}
          <div className="mb-8">
            <table className="w-full text-sm">
              <thead className="border-b-2 border-gray-300">
                <tr>
                  <th className="text-left py-2 font-bold text-gray-900">Transaction Date</th>
                  <th className="text-left py-2 font-bold text-gray-900">Gateway</th>
                  <th className="text-left py-2 font-bold text-gray-900">Transaction ID</th>
                  <th className="text-right py-2 font-bold text-gray-900">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="text-center py-6 text-gray-500">
                    No Related Transactions Found
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
              <span className="font-bold text-gray-900">Balance</span>
              <span className="font-bold text-gray-900 text-lg">
                KSh{(order.tier.price * 1.16).toLocaleString()}.00
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end print:hidden">
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Printer className="w-4 h-4" />
              Print
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-sm text-gray-500 relative z-10">
        <p>Powered by FlyTrails</p>
      </div>
    </div>
  );
};

export default Payment;