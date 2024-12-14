"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Send,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
          <button
            onClick={() => {
              router.push("/");
            }}
            className="text-2xl font-bold"
          >
            OltraPay
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#" className="hover:text-blue-200">
              Solutions
            </Link>
            <Link href="#" className="hover:text-blue-200">
              Business
            </Link>
            <Link href="/page/AboutUs" className="hover:text-blue-200">
              About
            </Link>
            <Link
              href="/page/ContactPage"
              className="hover:text-blue-200 font-semibold"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-blue-800 md:hidden p-4 space-y-4 z-50">
              <Link href="#" className="block hover:text-blue-200 py-2">
                Solutions
              </Link>
              <Link href="#" className="block hover:text-blue-200 py-2">
                Business
              </Link>
              <Link
                href="/page/AboutUs"
                className="block hover:text-blue-200 py-2"
              >
                About
              </Link>
              <Link
                href="/page/ContactPage"
                className="block hover:text-blue-200 py-2 font-semibold"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl">
              We&apos;re here to help. Reach out to us for support, inquiries,
              or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">24/7 Support Line</p>
                <p className="text-blue-600 font-semibold">+1 (888) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">
                  We&apos;ll respond within 24 hours
                </p>
                <p className="text-blue-600 font-semibold">
                  support@oltrapay.com
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-2">Available Mon-Fri</p>
                <p className="text-blue-600 font-semibold">9 AM - 6 PM EST</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Visit Our Office</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Headquarters</h3>
                      <p className="text-gray-600">
                        123 Financial District
                        <br />
                        New York, NY 10004
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM EST
                        <br />
                        Saturday: 10:00 AM - 4:00 PM EST
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Preview */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Quick Help</h2>
                <div className="space-y-4">
                  <details className="border-b pb-4">
                    <summary className="font-semibold cursor-pointer">
                      How can I reset my password?
                    </summary>
                    <p className="mt-2 text-gray-600">
                      Visit the login page and click on &quot;Forgot
                      Password&quot;. Follow the instructions sent to your
                      registered email.
                    </p>
                  </details>
                  <details className="border-b pb-4">
                    <summary className="font-semibold cursor-pointer">
                      What are your transaction fees?
                    </summary>
                    <p className="mt-2 text-gray-600">
                      Our transaction fees vary by account type and transaction
                      volume. Please visit our pricing page for detailed
                      information.
                    </p>
                  </details>
                  <details className="border-b pb-4">
                    <summary className="font-semibold cursor-pointer">
                      How long does verification take?
                    </summary>
                    <p className="mt-2 text-gray-600">
                      Most verifications are completed within 24-48 hours. For
                      business accounts, it may take up to 5 business days.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">OltraPay</h4>
              <p className="text-gray-400">
                Transforming the future of payments, one transaction at a time.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Personal</li>
                <li>Business</li>
                <li>Enterprise</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OltraPay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
