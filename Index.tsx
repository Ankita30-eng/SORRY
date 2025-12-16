import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import ApologyStep from "@/components/ApologyStep";
import LoveButton from "@/components/LoveButton";
import EscapeButton from "@/components/EscapeButton";
import HeartBurst from "@/components/HeartBurst";
import Sparkles from "@/components/Sparkles";
import Sticker from "@/components/Sticker";

// Import all the cute Milk & Mocha stickers
import sorryStickerSrc from "@/assets/stickers/sorry.gif";
import cryingStickerSrc from "@/assets/stickers/crying.gif";
import kissStickerSrc from "@/assets/stickers/kiss.gif";
import cheeringStickerSrc from "@/assets/stickers/cheering.gif";
import heartStickerSrc from "@/assets/stickers/heart.gif";
import iLoveYouStickerSrc from "@/assets/stickers/i-love-you.gif";
import pleaseStickerSrc from "@/assets/stickers/please.gif";
import hugStickerSrc from "@/assets/stickers/hug.gif";

const Index = () => {
  const [step, setStep] = useState(0);
  const [showBurst, setShowBurst] = useState(false);

  // Customize these for your boyfriend! 💕
  const petName = "My Love"; // Change this to his nickname!
  const yourName = "Your Girl"; // Change this to your name!

  const handleForgive = () => {
    setShowBurst(true);
    setTimeout(() => {
      setStep(5);
      setShowBurst(false);
    }, 1000);
  };

  const handleNoClick = () => {
    // Even clicking No moves forward with a playful message
    setStep(4);
  };

  const getHeartIntensity = (): "low" | "medium" | "high" => {
    if (step === 5) return "high";
    if (step >= 3) return "medium";
    return "low";
  };

  return (
    <div className="min-h-screen bg-dark-gradient overflow-hidden relative">
      <FloatingHearts intensity={getHeartIntensity()} />
      <Sparkles />
      <HeartBurst trigger={showBurst} />

      <AnimatePresence mode="wait">
        {step === 0 && (
          <ApologyStep key="step0">
            <Sticker src={sorryStickerSrc} alt="Sorry bear" size="xl" className="mb-4" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg mb-4 font-body"
            >
              POV:
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-4xl md:text-6xl font-romantic text-gradient mb-6"
            >
              {petName} is angry with me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl md:text-2xl text-foreground mb-12 font-body"
            >
              I&apos;m here to say <span className="text-primary font-semibold">Sorry</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <LoveButton onClick={() => setStep(1)} size="lg">
                Let me explain...
              </LoveButton>
            </motion.div>
          </ApologyStep>
        )}

        {step === 1 && (
          <ApologyStep key="step1">
            <Sticker src={cryingStickerSrc} alt="Crying bear" size="xl" className="mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-romantic text-foreground mb-6"
            >
              I know I messed up...
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-4 font-body max-w-md"
            >
              And I&apos;ve been feeling terrible about it
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-xl md:text-2xl text-primary font-body mb-12"
            >
              You mean the world to me
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <LoveButton onClick={() => setStep(2)} size="lg">
                Continue
              </LoveButton>
            </motion.div>
          </ApologyStep>
        )}

        {step === 2 && (
          <ApologyStep key="step2">
            <Sticker src={heartStickerSrc} alt="Heart bear" size="xl" className="mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-romantic text-foreground mb-8"
            >
              I promise to be better
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4 mb-12"
            >
              <p className="text-lg text-muted-foreground font-body flex items-center justify-center gap-2">
                <span className="text-primary">✨</span> I&apos;ll listen more carefully
              </p>
              <p className="text-lg text-muted-foreground font-body flex items-center justify-center gap-2">
                <span className="text-primary">✨</span> I&apos;ll be more understanding
              </p>
              <p className="text-lg text-muted-foreground font-body flex items-center justify-center gap-2">
                <span className="text-primary">✨</span> I&apos;ll always choose you
              </p>
              <p className="text-lg text-muted-foreground font-body flex items-center justify-center gap-2">
                <span className="text-primary">✨</span> I&apos;ll make you smile everyday
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <LoveButton onClick={() => setStep(3)} size="lg">
                One more thing...
              </LoveButton>
            </motion.div>
          </ApologyStep>
        )}

        {step === 3 && (
          <ApologyStep key="step3">
            <Sticker src={iLoveYouStickerSrc} alt="I love you bear" size="xl" className="mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-romantic text-gradient mb-8"
            >
              Will you forgive me?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground font-body mb-12 max-w-md"
            >
              I can&apos;t imagine my life without your beautiful smile
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <LoveButton onClick={handleForgive} size="lg">
                Yes, I forgive you!
              </LoveButton>
              <EscapeButton onClick={handleNoClick} />
            </motion.div>
          </ApologyStep>
        )}

        {step === 4 && (
          <ApologyStep key="step4">
            <Sticker src={pleaseStickerSrc} alt="Please bear" size="xl" className="mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-romantic text-foreground mb-8"
            >
              Please don&apos;t be angry...
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-muted-foreground font-body mb-4"
            >
              I&apos;ll do anything to make it up to you!
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-lg text-primary font-body mb-12"
            >
              Pretty please with extra love on top?
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <LoveButton onClick={handleForgive} size="lg">
                Okay fine... I forgive you
              </LoveButton>
              <LoveButton onClick={() => setStep(3)} variant="outline" size="md">
                Let me think...
              </LoveButton>
            </motion.div>
          </ApologyStep>
        )}

        {step === 5 && (
          <ApologyStep key="step5">
            <div className="flex gap-4 items-center justify-center mb-8">
              <Sticker src={cheeringStickerSrc} alt="Cheering bears" size="lg" />
              <Sticker src={kissStickerSrc} alt="Kiss bears" size="lg" />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl font-romantic text-gradient mb-6"
            >
              Yayyy! Thank you!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-foreground font-body mb-4"
            >
              You&apos;re the best thing that ever happened to me!
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-lg text-muted-foreground font-body mb-8"
            >
              I promise to love you more everyday
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-md shadow-romantic"
            >
              <Sticker src={hugStickerSrc} alt="Hug bears" size="md" className="mx-auto mb-4" />
              <p className="text-2xl md:text-3xl font-romantic text-primary mb-2">
                Forever yours,
              </p>
              <p className="text-xl text-foreground font-body">
                {yourName}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="mt-12"
            >
              <LoveButton onClick={() => setStep(0)} variant="outline" size="md">
                Start Over
              </LoveButton>
            </motion.div>
          </ApologyStep>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
