import React, { createContext, useState, useRef, useContext, useEffect } from 'react';
import localforage from 'localforage';

const TutorialContext = createContext();

export const TutorialProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showInitialModal, setShowInitialModal] = useState(false);
  const refs = useRef({});

  const registerRef = (name, ref) => {
    if (ref) {
      refs.current[name] = ref;
    } else {
      delete refs.current[name];
    }
  };

  useEffect(() => {
    const checkTutorial = async () => {
      const lastPrompt = await localforage.getItem('domino_tutorial_prompt');
      const now = Date.now();
      if (!lastPrompt || now > lastPrompt) {
        setTimeout(() => setShowInitialModal(true), 2500);
      }
    };
    checkTutorial();
  }, []);

  const startTutorial = async () => {
    await localforage.setItem('domino_tutorial_prompt', Date.now() + 30 * 24 * 60 * 60 * 1000);
    setShowInitialModal(false);
    setIsActive(true);
    setCurrentStep(1);
  };

  const skipTutorialWeek = async () => {
    await localforage.setItem('domino_tutorial_prompt', Date.now() + 7 * 24 * 60 * 60 * 1000);
    setShowInitialModal(false);
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const jumpToStep = (step) => {
    setCurrentStep(step);
  };

  const closeTutorial = () => {
    setIsActive(false);
    setCurrentStep(0);
  };

  return (
    <TutorialContext.Provider
      value={{
        isActive,
        setIsActive,
        currentStep,
        setCurrentStep,
        refs,
        registerRef,
        nextStep,
        jumpToStep,
        closeTutorial,
        showInitialModal,
        startTutorial,
        skipTutorialWeek,
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
};

export const useTutorial = () => useContext(TutorialContext);
