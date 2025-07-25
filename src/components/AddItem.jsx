import React, { useState } from "react";
import Label from "./Label.jsx";
import Input from "./Input.jsx";
import { Button } from "./Button";
import Div from "./Div.jsx";

const AddItem = () => {
  const [formData, setForm] = useState({
    name: "",
    description: "",
    category: "",
    condition: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.condition.trim())
      newErrors.condition = "Condition is required";
    if (!formData.image.trim()) newErrors.image = "Image URL is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Mock submission success/failure
    const isSuccess = Math.random() > 0.3;
    setSubmissionMessage(
      isSuccess
        ? { type: "success", message: "Item added successfully!" }
        : { type: "error", message: "Failed to add item. Please try again." }
    );

    if (isSuccess) {
      setForm({
        name: "",
        description: "",
        category: "",
        condition: "",
        image: "",
      });
    }
    setTimeout(() => {
      setSubmissionMessage(null);
    }, 1000);
  };

  return (
    <div className="p-3">
      <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg w-full">
        <h2 className="text-2xl font-bold mb-6">Add New Item</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          {/* Name */}
          <Div>
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              type="text"
              value={formData.name}
              onChangeHandler={handleChange}
              placeholder="Item name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </Div>

          {/* Description */}
          <Div>
            <Label htmlFor="description">Description</Label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Item description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
              rows={3}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </Div>

          {/* Category */}
          <Div>
            <Label htmlFor="category">Category</Label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
            >
              <option value="">Select category</option>
              <option value="Outdoors">Outdoors</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Fitness">Fitness</option>
              <option value="Tools">Tools</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category}</p>
            )}
          </Div>

          {/* Condition */}
          <Div>
            <Label htmlFor="condition">Condition</Label>
            <Input
              name="condition"
              type="text"
              value={formData.condition}
              onChangeHandler={handleChange}
              placeholder="Item condition"
            />
            {errors.condition && (
              <p className="text-red-500 text-sm">{errors.condition}</p>
            )}
          </Div>

          {/* Image URL */}
          <Div>
            <Label htmlFor="image">Image</Label>
            <Input
              name="image"
              type="text"
              value={formData.image}
              onChangeHandler={handleChange}
              placeholder="https://example.com/image.jpg"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
          </Div>

          {/* Submit Button */}
          <Button>Submit</Button>

          {/* Submission Message */}
          {submissionMessage && (
            <p
              className={`mt-4 text-center font-semibold ${
                submissionMessage.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {submissionMessage.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddItem;
