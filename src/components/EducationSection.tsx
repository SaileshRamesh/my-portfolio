import { education } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🎓 Education
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              title={`🎓 ${edu.degree}`}
              subtitle={`🏛️ ${edu.institution}`}
              date={`📅 ${edu.period}`}
              isLast={index === education.length - 1}
              index={index}
            >
              <p className="text-sm text-muted-foreground mb-3">
                📍 {edu.location}
              </p>

              {edu.achievements && edu.achievements.length > 0 && (
                <motion.div
                  className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-3">
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                    </div>
                    <h4 className="text-sm font-medium">
                      ✨ Achievements & Activities
                    </h4>
                  </div>
                  <ul className="list-none ml-4 space-y-2 text-sm">
                    {edu.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground relative pl-6"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        {achievement.url ? (
                          <a
                            href={achievement.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-500 hover:underline"
                          >
                            {achievement.name}
                          </a>
                        ) : (
                          achievement.name
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
