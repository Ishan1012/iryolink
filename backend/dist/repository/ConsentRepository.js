"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentRepository = void 0;
const Consent_1 = require("../model/Consent");
class ConsentRepository {
    saveConsent(consent) {
        return __awaiter(this, void 0, void 0, function* () {
            const newConsent = new Consent_1.Consent(consent);
            return yield newConsent.save();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Consent_1.Consent.findById(id);
        });
    }
    findByHash(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Consent_1.Consent.findOne({ hash }).exec();
        });
    }
    findByPatientAddress(patientAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Consent_1.Consent.findOne({ patientAddress }).exec();
        });
    }
    findPendingConsents() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Consent_1.Consent.findOne({ granted: false }).exec();
        });
    }
    getAllConsents() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Consent_1.Consent.find().exec();
        });
    }
}
exports.ConsentRepository = ConsentRepository;
//# sourceMappingURL=ConsentRepository.js.map