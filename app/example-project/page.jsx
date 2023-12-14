/**
 * ConstructionProject.js
 */
import React from "react";
import {
  FaceIcon,
  ImageIcon,
  RulerSquareIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

const ConstructionProject = () => {
  const projectData = {
    projectName: "Cozy Family Home",
    projectOverview:
      "Introducing our latest construction project, the Cozy Family Home. Our goal is to create a comfortable and modern living space for families while incorporating sustainable and energy-efficient features.",
    houseSpecifications: {
      totalSquareMeters: 250,
      numberOfRooms: 5,
      bedrooms: {
        count: 3,
        totalArea: 120,
      },
      bathrooms: {
        count: 2,
        totalArea: 15,
      },
      kitchen: 20,
      livingRoom: 30,
      diningRoom: 15,
      additionalRooms: {
        description: "Home Office and Playroom",
        totalArea: 35,
      },
      garage: {
        carSpaces: 2,
        totalArea: 40,
      },
      outdoorSpace: 150,
    },
    architecturalStyle: "Modern Minimalist",
    keyFeatures: [
      "Spacious living area with large windows",
      "Energy-efficient HVAC system",
      "Outdoor patio with garden",
      "Fireplace in the living room",
    ],
    energyEfficiency:
      "The Cozy Family Home is designed with energy efficiency in mind. It features high-quality insulation, LED lighting throughout, and Energy Star-rated appliances to reduce energy consumption. Additionally, solar panels on the roof harness solar energy to further decrease utility costs.",
    safetyAndUtilities: {
      safetyFeatures: ["Smoke detectors", "Security system"],
      utilities: ["Electricity", "Water", "Sewage"],
    },
    landscaping:
      "The landscaping plan includes a beautifully landscaped garden with a variety of plants and trees, creating a peaceful and green environment for the family to enjoy.",
    projectImages: [
      "/concept-drawings.jpg",
      "/outdoor-landscaping.jpg",
      "/interior-renderings.jpg",
    ],
    budgetEstimate: {
      materials: "$75,000",
      labor: "$50,000",
      landscaping: "$10,000",
      total: "$135,000",
    },
    timeline: {
      startDate: "October 2023",
      completionDate: "April 2024",
    },
  };

  return (
    <section className="mx-auto max-w-7xl p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-semibold">
            Project Name: {projectData.projectName}
          </h1>
          <div className="text-sm md:text-md mt-2">
            {projectData.projectOverview}
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">House Specifications</h2>
            <ul className="list-disc list-inside mt-2">
              <li>
                Total Square Meters:{" "}
                {projectData.houseSpecifications.totalSquareMeters} sqm
              </li>
              <li>
                Number of Rooms: {projectData.houseSpecifications.numberOfRooms}
              </li>
              <li>
                Bedrooms: {projectData.houseSpecifications.bedrooms.count} (
                {projectData.houseSpecifications.bedrooms.totalArea} sqm total)
              </li>
              <li>
                Bathrooms: {projectData.houseSpecifications.bathrooms.count} (
                {projectData.houseSpecifications.bathrooms.totalArea} sqm total)
              </li>
              <li>Kitchen: {projectData.houseSpecifications.kitchen} sqm</li>
              <li>
                Living Room: {projectData.houseSpecifications.livingRoom} sqm
              </li>
              <li>
                Dining Room: {projectData.houseSpecifications.diningRoom} sqm
              </li>
              <li>
                Additional Rooms:{" "}
                {projectData.houseSpecifications.additionalRooms.description} (
                {projectData.houseSpecifications.additionalRooms.totalArea} sqm
                total)
              </li>
              <li>
                Garage: {projectData.houseSpecifications.garage.carSpaces} car
                spaces ({projectData.houseSpecifications.garage.totalArea} sqm
                total)
              </li>
              <li>
                Outdoor Space: {projectData.houseSpecifications.outdoorSpace}{" "}
                sqm
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md">
          <div className="relative">
            <Image
              src={projectData.projectImages[0]}
              alt={`Image of ${projectData.projectName}`}
              width={500}
              height={500}
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold">Architectural Style</h2>
        <p className="mt-2">{projectData.architecturalStyle}</p>
      </div>
      <div className="mt-6 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold">Key Features</h2>
        <ul className="list-disc list-inside mt-2">
          {projectData.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold">Energy Efficiency</h2>
        <p className="mt-2">{projectData.energyEfficiency}</p>
      </div>
      <div className="mt-6 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold">Safety and Utilities</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Safety Features:</li>
          <ul className="list-disc list-inside ml-6">
            {projectData.safetyAndUtilities.safetyFeatures.map(
              (feature, index) => (
                <li key={index}>{feature}</li>
              )
            )}
          </ul>
          <li>Utility Connections:</li>
          <ul className="list-disc list-inside ml-6">
            {projectData.safetyAndUtilities.utilities.map((utility, index) => (
              <li key={index}>{utility}</li>
            ))}
          </ul>
        </ul>
      </div>
      <div className="mt-6 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold">Landscaping</h2>
        <p className="mt-2">{projectData.landscaping}</p>
      </div>
      <div className="mt-6 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold">Project Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {projectData.projectImages.map((imageSrc, index) => (
            <div key={index} className="relative">
              <Image
                src={imageSrc}
                alt={`Image ${index + 1}`}
                width={500}
                height={500}
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold">Budget Estimate</h2>
        <p className="mt-2">
          Materials: {projectData.budgetEstimate.materials}
        </p>
        <p>Labor: {projectData.budgetEstimate.labor}</p>
        <p>Landscaping: {projectData.budgetEstimate.landscaping}</p>
        <p className="font-semibold mt-2">
          Total: {projectData.budgetEstimate.total}
        </p>
      </div>
      <div className="mt-6 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold">Timeline</h2>
        <p className="mt-2">Start Date: {projectData.timeline.startDate}</p>
        <p>Completion Date: {projectData.timeline.completionDate}</p>
      </div>
    </section>
  );
};

export default ConstructionProject;
