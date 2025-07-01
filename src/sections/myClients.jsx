import { motion } from "motion/react";

export function MyClients() {
    const clientsData = [
      {
        imageUrl:
          "clients/sow-square.png",
        name: "Sowmya Sasun",
        profile: "Content Creator",
        socialLink: "https://www.instagram.com/sowmyasasunn/",
        rating: "⭐⭐⭐⭐⭐",
        testimonial:
          "Anubhav is an incredible editor who truly understands your vision and delivers exactly what you need. His turnaround time is exceptional, and he brings a high level of creativity and professionalism to both video editing and thumbnail design. Ever since he started working on my YouTube and Instagram channels, the engagement has increased significantly. I genuinely feel lucky to have found him!",
      },
      {
        imageUrl:
          "clients/meridianmix-square.png",
        name: "Ishank Ghulati",
        profile: "Meridian Mix Tech Ventures",
        socialLink: "https://meridianmix.com/",
        rating: "⭐⭐⭐⭐",
        testimonial:"Not many editors I have worked with understand a concept easily. This guy does, we have tested a couple of different verticals and different geographies - he gets it! Keep up the spirit Anubhav."
      },
      {
        imageUrl:
          "clients/pratilipifm-square.png",
        name: "Pratilipi Team",
        profile: "Pratilipi FM",
        socialLink: "https://pratilipifm.com/",
        rating: "⭐⭐⭐⭐⭐",
        testimonial:"Anubhav quickly understood our brand's tone and delivered edits that felt both intentional and effortless. His turnaround time and consistency made the entire process smooth on our end."
      }
    ]
    return (
        <div
            className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
            <div
                className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                <div
                    className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            
            <div className="px-4 py-10 md:py-20 w-full">
                <h1 className="relative z-10 mx-auto max-w-4xl text-center">
                    {/* Top line: THE EDITOR */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl lg:text-6xl font-extrabold text-blue-500 dark:text-blue-400 blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,1)]"
                    >
                        What my Clients say?
                    </motion.div>
                </h1>

                <div className="px-4 mt-10 md:mt-16 w-full flex flex-col gap-4 justify-center">
                    {clientsData.map((client, index) => (
                        <TestimonialCard
                            key={index}
                            imageUrl={client.imageUrl}
                            name={client.name}
                            social={client.profile}
                            rating={client.rating}
                            testimonial={client.testimonial}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}




const TestimonialCard = ({ imageUrl, name, social, testimonial, rating }) => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl p-8 flex flex-col sm:flex-row bg-black text-white space-y-4 sm:space-y-0 sm:space-x-4 gap-2"
style={{ filter: "drop-shadow(0 8px 8px rgba(59, 131, 246, 0.25))" }}
    >
      
      {/* Image Box */}
      <div className="aspect-square w-full sm:w-40 flex-shrink-0 rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Text Content */}
      <div className="flex flex-col justify-center text-left">
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-sm italic text-gray-300">{social}</p>
        <p className="text-sm text-gray-300">{rating}</p>
        <p className="text-base whitespace-pre-line mt-4">{testimonial}</p>

      </div>
    </div>
  );
};