import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
    Shield, ArrowRight, CheckCircle, 
    User, Mail, Phone, MapPin, Globe, Star, CreditCard 
} from 'lucide-react';

const tierData: Record<string, any> = {
  "explorer": { 
      name: "Explorer", 
      price: 2000, 
      image: "/membership/explorer.jpg",
      tagline: "Ignite your wanderlust" 
  },
  "adventure-elite": { 
      name: "Adventure Elite", 
      price: 5000, 
      image: "/membership/adventure-elite.jpg",
      tagline: "For the bold voyager" 
  },
  "prestige-platinum": { 
      name: "Prestige Platinum", 
      price: 19000, 
      image: "/membership/prestige-platinum.jpg",
      tagline: "The gold standard" 
  }
};

const Checkout: React.FC = () => {
  const { tierId } = useParams();
  const navigate = useNavigate();
  const tier = tierId ? tierData[tierId] : null;

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', country: 'Kenya', postalCode: '',
    agreedToTerms: false
  });

  if (!tier) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
        alert("Please agree to the Terms & Conditions");
        return;
    }
    const orderId = `ORD-${Math.floor(Math.random() * 100000)}`;
    const orderData = { tier, billing: formData, orderId };
    localStorage.setItem('currentOrder', JSON.stringify(orderData));
    
    window.open('/payment', '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-12 font-sans selection:bg-[#f29100] selection:text-white">
        
        {/* Left Panel: The Experience (Dark & Visual) - Full Height */}
        <div className="lg:col-span-5 bg-[#111] relative p-10 md:p-14 flex flex-col text-white min-h-[40vh] lg:min-h-screen overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#f29100]/10 to-transparent opacity-50 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#f29100] rounded-full blur-[120px] opacity-20"></div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                    <img src="/flytrails-logo.png" alt="FlyTrails" className="h-8 w-auto opacity-90" />
                </div>
                <button onClick={() => navigate(-1)} className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    Cancel
                </button>
            </div>

            {/* The Selected Tier Card */}
            <div className="relative z-10 flex-1 flex flex-col justify-center">
                <p className="text-[#f29100] text-xs font-black uppercase tracking-[0.3em] mb-4">You have selected</p>
                <h1 className="text-5xl md:text-6xl font-serif font-black italic mb-2 leading-[0.9]">
                    {tier.name}
                </h1>
                <p className="text-white/60 font-light text-lg mb-10 italic">{tier.tagline}</p>

                {/* Card Visual */}
                <div className="relative aspect-[1.58/1] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group mb-10 transform transition-transform hover:scale-[1.02] duration-500">
                    <img src={tier.image} alt={tier.name} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-6 left-6">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-1">Membership</p>
                        <p className="font-serif italic text-xl text-white">{tier.name}</p>
                    </div>
                </div>

                <div className="flex items-end justify-between border-t border-white/10 pt-8">
                    <div>
                        <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Total Due Now</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-lg font-bold text-[#f29100]">KES</span>
                            <span className="text-4xl font-serif font-black">{tier.price.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center gap-1 text-[#f29100] mb-1 justify-end">
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                        </div>
                        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Premium Access</p>
                    </div>
                </div>
            </div>

            {/* Trust Footer */}
            <div className="relative z-10 mt-12 flex items-center gap-3 text-[10px] text-white/30 uppercase tracking-widest font-bold">
                <Shield className="w-3 h-3" />
                <span>Secure SSL Encryption</span>
            </div>
        </div>

        {/* Right Panel: The Form (Clean & Modern) - Full Height */}
        <div className="lg:col-span-7 bg-[#f8f9fa] p-10 md:p-14 flex flex-col justify-center min-h-screen">
            
            <div className="max-w-2xl mx-auto w-full py-12 lg:py-0">
                <h2 className="text-3xl font-serif font-black italic text-[#111] mb-8">
                    Secure Your Spot
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Personal Details */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#f29100] mb-6 flex items-center gap-2">
                            <User className="w-4 h-4" /> Who is travelling?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">First Name</label>
                                <input required name="firstName" onChange={handleChange} className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-[#f29100] px-4 py-3 rounded-t-lg outline-none transition-all font-medium text-[#111]" placeholder="Jane" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Last Name</label>
                                <input required name="lastName" onChange={handleChange} className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-[#f29100] px-4 py-3 rounded-t-lg outline-none transition-all font-medium text-[#111]" placeholder="Doe" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Email Address</label>
                                <div className="relative">
                                    <input required type="email" name="email" onChange={handleChange} className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-[#f29100] px-4 py-3 pl-11 rounded-t-lg outline-none transition-all font-medium text-[#111]" placeholder="jane@example.com" />
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                </div>
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Phone Number</label>
                                <div className="relative">
                                    <input required type="tel" name="phone" onChange={handleChange} className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-[#f29100] px-4 py-3 pl-11 rounded-t-lg outline-none transition-all font-medium text-[#111]" placeholder="+254 700 000 000" />
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Billing Details */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#f29100] mb-6 flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> Billing Address
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Street Address</label>
                                <input required name="address" onChange={handleChange} className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-[#f29100] px-4 py-3 rounded-t-lg outline-none transition-all font-medium text-[#111]" placeholder="123 Safari Lane" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">City</label>
                                <input required name="city" onChange={handleChange} className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-[#f29100] px-4 py-3 rounded-t-lg outline-none transition-all font-medium text-[#111]" placeholder="Nairobi" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Country</label>
                                <div className="relative">
                                    <select name="country" onChange={handleChange} className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-[#f29100] px-4 py-3 pl-10 rounded-t-lg outline-none transition-all font-medium text-[#111] appearance-none cursor-pointer">
                                        <option value="Kenya">Kenya</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                    </select>
                                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div>
                        <label className="flex items-start gap-3 cursor-pointer group mb-8 pl-1">
                            <div className="relative flex items-center mt-0.5">
                                <input type="checkbox" name="agreedToTerms" onChange={(e) => setFormData({...formData, agreedToTerms: e.target.checked})} className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow-sm transition-all checked:border-[#f29100] checked:bg-[#f29100] hover:border-[#f29100]" />
                                <CheckCircle className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                            </div>
                            <span className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors leading-relaxed">
                                I confirm that I have read and agree to the <span className="underline decoration-slate-300 underline-offset-2 hover:text-[#f29100]">Terms of Service</span> and <span className="underline decoration-slate-300 underline-offset-2 hover:text-[#f29100]">Privacy Policy</span>.
                            </span>
                        </label>

                        <button type="submit" className="w-full py-5 bg-[#111] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[#f29100] transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group">
                            Proceed to Payment
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="flex justify-center gap-6 mt-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                             <CreditCard className="h-6 w-auto" />
                             {/* Placeholder icons using text/font for stability if images fail */}
                             <span className="font-black italic">VISA</span>
                             <span className="font-black italic">Mastercard</span>
                             <span className="font-black italic">PayPal</span>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
  );
};

export default Checkout;