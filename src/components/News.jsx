import { motion, AnimatePresence } from "framer-motion";

const News = ({ isScrolled }) => {
  return (
    <div className="absolute right-0 top-20">
    <AnimatePresence>
      {!isScrolled && (
        <motion.div
          key="newsletter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          class="relative bg-transparent text-white py-6 px-8 flex justify-between items-center border-t border-white/20"
        >
          {/* Newsletter Text */}
          <div>
            <h2 class="text-lg font-semibold">Newsletter</h2>
            <p class="text-sm text-gray-300 mt-1">
              By signing up, I agree with the data protection policy of Opal.
            </p>
          </div>

          {/* Arrow Button */}
          <button class="flex items-center justify-center h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="h-6 w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
    </div>

  );
};

export default News;
