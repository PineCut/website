import {
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#9FD996]">PineCut.</h1>
        <p className="py-4 text-[#223240]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-4">
          <FaInstagramSquare size={30} color="#223240" />
          <FaTwitterSquare size={30} color="#223240" />
          <FaGithubSquare size={30} color="#223240" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-[#223240]">Solutions</h6>
          <ul>
            <li className="py-2 text-sm text-[#223240]">Analytics</li>
            <li className="py-2 text-sm text-[#223240]">Marketing</li>
            <li className="py-2 text-sm text-[#223240]">Commerce</li>
            <li className="py-2 text-sm text-[#223240]">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#223240]">Support</h6>
          <ul>
            <li className="py-2 text-sm text-[#223240]">Pricing</li>
            <li className="py-2 text-sm text-[#223240]">Documentation</li>
            <li className="py-2 text-sm text-[#223240]">Guides</li>
            <li className="py-2 text-sm text-[#223240]">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#223240]">Company</h6>
          <ul>
            <li className="py-2 text-sm text-[#223240]">About</li>
            <li className="py-2 text-sm text-[#223240]">Blog</li>
            <li className="py-2 text-sm text-[#223240]">Jobs</li>
            <li className="py-2 text-sm text-[#223240]">Press</li>
            <li className="py-2 text-sm text-[#223240]">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#223240]">Legal</h6>
          <ul>
            <li className="py-2 text-sm text-[#223240]">Claim</li>
            <li className="py-2 text-sm text-[#223240]">Policy</li>
            <li className="py-2 text-sm text-[#223240]">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
