"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Menu, X, CheckCircle2, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const stats = [
    { number: "5M+", label: "Active Users" },
    { number: "50K+", label: "Business Partners" },
    { number: "100+", label: "Countries Served" },
    { number: "$1B+", label: "Transactions Processed" },
  ];

  const values = [
    {
      icon: <CheckCircle2 className="h-8 w-8 text-blue-600" />,
      title: "Trust & Security",
      description:
        "We maintain the highest standards of security to protect our users' financial data and transactions.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Customer First",
      description:
        "Our decisions and innovations are driven by our users' needs and feedback.",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Impact",
      description:
        "We're committed to making digital payments accessible to everyone, everywhere.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      description:
        "We continuously evolve our technology to stay ahead of the digital payment curve.",
    },
  ];

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
              Our Mission to Transform Payments
            </h1>
            <p className="text-xl mb-8">
              Building a future where digital payments are accessible, secure,
              and seamless for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Founded in 2020, OltraPay emerged from a simple yet powerful
                vision: to bridge the gap between traditional cash-based
                economies and the digital future of finance. Our founders
                recognized the challenges faced by millions who relied solely on
                cash transactions and set out to create a solution that would
                make digital payments accessible to everyone.
              </p>

              <p>
                What started as a mobile payment application has grown into a
                comprehensive financial technology platform, serving individuals
                and businesses across the globe. Our journey has been marked by
                continuous innovation, unwavering commitment to security, and a
                deep understanding of our users&apos; needs.
              </p>

              <p>
                Today, OltraPay stands at the forefront of the digital payment
                revolution, powered by cutting-edge technology and driven by our
                mission to create a more inclusive financial ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                  <img
                    src="/api/placeholder/160/160"
                    alt="Team member"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-gray-600 mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  Former fintech executive with 15+ years of experience in
                  digital payments and banking.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of the digital payment revolution and help us build a more
            inclusive financial future.
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              View Open Positions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700"
            >
              Contact Us
            </Button>
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

export default AboutPage;
