"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const support_1 = require("./support");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(JSON.stringify(process.env, null, '    '));
        if (!process.env.GITHUB_SHA) {
            core.setFailed('cannot access sha');
        }
        const dirs = yield support_1.getChangedDirs('.', process.env.GITHUB_SHA);
        core.setOutput('changedDirs', dirs.join(', ')); // steps.<step id>.outputs
        core.exportVariable('changedDirs', dirs.join(', '));
        const files = yield support_1.getChangedFiles('.', process.env.GITHUB_SHA);
        core.setOutput('changedFiles', files.join(', ')); // steps.<step id>.outputs
        core.exportVariable('changedFiles', files.join(', '));
    });
}
run();
