import { useState, useRef, useEffect } from "react";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import { ChevronDown } from "lucide-react";
import countries from "./countries";

interface PhoneInputProps {
    inputClass?: string;
    inputPlaceHolder?: string;
    label?: string;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    value?: string;
    countryCode?: string;
    onChange?: (data: {value: string, countryCode: string}) => void;
}

const PhoneInput = ({ 
    label = "Phone", 
    inputClass, 
    inputPlaceHolder, 
    disabled, 
    required, 
    value = "", 
    countryCode, 
    onChange, 
    error 
}: PhoneInputProps) => {
    const [selectedCountry, setSelectedCountry] = useState(
        countries.find((c) => c.dialCode === countryCode) || null
    );
    
    const [phoneNumber, setPhoneNumber] = useState(value);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setPhoneNumber(value);
    }, [value]);

    useEffect(() => {
        setSelectedCountry(countries.find((c) => c.dialCode === countryCode) || null);
    }, [countryCode]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelectCountry = (country: any) => {
        setSelectedCountry(country);
        setShowDropdown(false);
        onChange?.({value: phoneNumber, countryCode: country.dialCode});
    };

    return (
        <div className="flex flex-col gap-2">
            <Label>{label}</Label>
            <div className="relative flex gap-2">
                {/* Flag Dropdown Button */}
                <div
                    role="button"
                    className="h-[48px] px-2 rounded-lg bg-white flex items-center justify-center cursor-pointer shadow-sm"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    {selectedCountry ? (
                        <>
                            <img src={selectedCountry.flag} alt="flag" className="w-6 h-4 rounded-sm" />
                            <ChevronDown className="ml-2 size-4 text-gray-500 border rounded-full" />
                        </>
                    ) : (
                        <span className="text-gray-500">Select</span>
                    )}
                </div>

                {/* Phone Input */}
                <div className="flex flex-col">
                    <Input
                        placeholder={inputPlaceHolder}
                        className={inputClass}
                        value={phoneNumber}
                        onChange={(e) => {
                            const number = e.target.value.trim();
                            setPhoneNumber(number);
                            onChange?.({value: number, countryCode:selectedCountry?.dialCode || ""});
                        }}
                        disabled={disabled}
                        required={required}
                        error={error}
                    />
                </div>

                {/* Country Dropdown */}
                {showDropdown && (
                    <div 
                        ref={dropdownRef}
                        className="absolute left-0 top-full mt-2 w-56 bg-white shadow-md border rounded-lg max-h-60 overflow-y-auto z-10"
                    >
                        {countries.map((country) => (
                            <div
                                key={country.code}
                                className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelectCountry(country)}
                            >
                                <img src={country.flag} alt={country.code} className="w-5 h-3" />
                                <span>{country.name}</span>
                                <span className="text-gray-500 ml-auto">{country.dialCode}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PhoneInput;
