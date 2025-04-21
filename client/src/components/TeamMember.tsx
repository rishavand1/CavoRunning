import { motion } from "framer-motion";

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
}

export default function TeamMember({ image, name, role }: TeamMemberProps) {
  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-24 h-24 rounded-full bg-[#2A2A3A] mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-lg font-outfit font-medium">{name}</h4>
      <p className="text-sm text-gray-400">{role}</p>
    </motion.div>
  );
}
