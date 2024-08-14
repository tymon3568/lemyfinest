<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
	import { toast } from 'svelte-sonner';
	let loading = false;
</script>

<svelte:head>
	<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>
<header class="section section-photo-hero theme-dark">
	<div class="overlay-image">
		<img
			class="h-full w-full object-cover"
			src="/assets/images/lemyfinest-banner.webp"
			alt="juice bottles overhead"
			sizes="(min-width: 2560px) 2560px, 100vw"
			srcset="/assets/images/lemyfinest-banner.webp 640w, /assets/images/lemyfinest-banner.webp 768w, /assets/images/lemyfinest-banner.webp  1024w, /assets/images/lemyfinest-banner.webp  1280w, /assets/images/lemyfinest-banner.webp  1536w"
			draggable="true"
			loading="lazy"
		/>
	</div>
	<div class="container relative z-10 flex flex-col justify-center items-center text-center">
		<h1 class="title text-4xl md:text-5xl lg:text-7xl max-w-[900px]">Liên hệ</h1>
	</div>
</header>
<section class="section theme-light">
	<div class="relative container max-w-3xl mx-auto">
		<form
			name="Contact Form"
			id="other"
			class="gap-y-5 gap-x-7 grid grid-cols-12"
			action="?/sendContact"
			method="POST"
			use:enhance={({ formElement }) => {
				//Before form post
				loading = true;
				//get result from backend
				return async ({ result, update }) => {
					console.log('🚀 ~ file: +page.svelte:67 ~ return ~ result', result);
					loading = false;
					if (result.type === 'success') {
						formElement.reset();
						toast.success('Your message has been sent, thank you!');
					}
					if (result.type === 'failure') {
						await applyAction(result);
						const a:any = result.data?.errMessage;
						toast.error(a);
					}
					update();
				};
			}}
		>
			<div class="text-base flex flex-col col-span-12 sm:col-span-12">
				<label for="name" class="flex flex-col gap-y-2 svelte-18pxma6"
					><span class="input-label">Họ tên *</span>
					<input
						id="name"
						placeholder="Họ và tên"
						name="name"
						required
						inputmode="text"
						class=" svelte-18pxma6"
						type="text"
						data-ddg-inputtype="identities.fullName"
					/></label
				>
			</div>
			<div class="text-base flex flex-col col-span-12 sm:col-span-12">
				<label for="email" class="flex flex-col gap-y-2 label-border-b"
					><span class="input-label">Email *</span>
					<input
						type="email"
						id="email"
						placeholder="email@example.com"
						name="email"
						autocomplete="email"
						required
						data-ddg-inputtype="identities.emailAddress"
						data-ddg-autofill="true"
						style="background-size: auto 24px !important; background-position: right center !important; background-repeat: no-repeat !important; background-origin: content-box !important; background-image: url(&quot;chrome-extension://bkdgflcldnnnapblkhphbgpggdiikppg/img/logo-small.svg&quot;) !important; transition: background !important;"
					/></label
				>
			</div>
			<div class="text-base flex flex-col col-span-12 sm:col-span-12">
				<label for="company" class="flex flex-col gap-y-2 svelte-18pxma6"
					><span class="input-label">Tên Công ty</span>
					<input
						id="company"
						placeholder="Công ty TNHH ABC"
						name="company"
						inputmode="text"
						class=" svelte-18pxma6"
						type="text"
						data-ddg-inputtype="unknown"
					/></label
				>
			</div>
			<div class="text-base flex flex-col col-span-12 sm:col-span-12">
				<label for="phone" class="flex flex-col gap-y-2 label-border-b"
					><span class="input-label">SĐT *</span>
					<div class="relative">
						<input
							class="!pl-20 xs:!pl-24 sm:!pl-28 flex-1 max-w-full w-full"
							type="tel"
							id="phone"
							placeholder="932-475-987"
							name="phone"
							autocomplete="tel-national"
							data-ddg-inputtype="identities.phone"
							required
						/>
						<div class="absolute inset-y-px left-px">
							<select
								name="tel-country-code"
								id="country-phone-code"
								autocomplete="tel-country-code"
								class="!py-0 h-full max-xs:pr-7 max-xs:text-xs max-sm:pr-8 max-sm:text-sm"
								data-ddg-inputtype="identities.addressCountryCode"
								><option value="+84">+84</option><option value="+93">+93</option><option
									value="+358">+358</option
								><option value="+355">+355</option><option value="+213">+213</option><option
									value="+1684">+1684</option
								><option value="+376">+376</option><option value="+244">+244</option><option
									value="+1264">+1264</option
								><option value="+672">+672</option><option value="+1268">+1268</option><option
									value="+54">+54</option
								><option value="+374">+374</option><option value="+297">+297</option><option
									value="+61">+61</option
								><option value="+43">+43</option><option value="+994">+994</option><option
									value="+1242">+1242</option
								><option value="+973">+973</option><option value="+880">+880</option><option
									value="+1246">+1246</option
								><option value="+375">+375</option><option value="+32">+32</option><option
									value="+501">+501</option
								><option value="+229">+229</option><option value="+1441">+1441</option><option
									value="+975">+975</option
								><option value="+591">+591</option><option value="+387">+387</option><option
									value="+267">+267</option
								><option value="+55">+55</option><option value="+246">+246</option><option
									value="+673">+673</option
								><option value="+359">+359</option><option value="+226">+226</option><option
									value="+257">+257</option
								><option value="+855">+855</option><option value="+237">+237</option><option
									value="+1">+1</option
								><option value="+238">+238</option><option value="+345">+345</option><option
									value="+236">+236</option
								><option value="+235">+235</option><option value="+56">+56</option><option
									value="+86">+86</option
								><option value="+61">+61</option><option value="+61">+61</option><option value="+57"
									>+57</option
								><option value="+269">+269</option><option value="+242">+242</option><option
									value="+243">+243</option
								><option value="+682">+682</option><option value="+506">+506</option><option
									value="+225">+225</option
								><option value="+385">+385</option><option value="+53">+53</option><option
									value="+357">+357</option
								><option value="+420">+420</option><option value="+45">+45</option><option
									value="+253">+253</option
								><option value="+1767">+1767</option><option value="+1849">+1849</option><option
									value="+593">+593</option
								><option value="+20">+20</option><option value="+503">+503</option><option
									value="+240">+240</option
								><option value="+291">+291</option><option value="+372">+372</option><option
									value="+251">+251</option
								><option value="+500">+500</option><option value="+298">+298</option><option
									value="+679">+679</option
								><option value="+358">+358</option><option value="+33">+33</option><option
									value="+594">+594</option
								><option value="+689">+689</option><option value="+241">+241</option><option
									value="+220">+220</option
								><option value="+995">+995</option><option value="+49">+49</option><option
									value="+233">+233</option
								><option value="+350">+350</option><option value="+30">+30</option><option
									value="+299">+299</option
								><option value="+1473">+1473</option><option value="+590">+590</option><option
									value="+1671">+1671</option
								><option value="+502">+502</option><option value="+44">+44</option><option
									value="+224">+224</option
								><option value="+245">+245</option><option value="+595">+595</option><option
									value="+509">+509</option
								><option value="+379">+379</option><option value="+504">+504</option><option
									value="+852">+852</option
								><option value="+36">+36</option><option value="+354">+354</option><option
									value="+91">+91</option
								><option value="+62">+62</option><option value="+98">+98</option><option
									value="+964">+964</option
								><option value="+353">+353</option><option value="+44">+44</option><option
									value="+972">+972</option
								><option value="+39">+39</option><option value="+1876">+1876</option><option
									value="+81">+81</option
								><option value="+44">+44</option><option value="+962">+962</option><option
									value="+77">+77</option
								><option value="+254">+254</option><option value="+686">+686</option><option
									value="+850">+850</option
								><option value="+82">+82</option><option value="+965">+965</option><option
									value="+996">+996</option
								><option value="+856">+856</option><option value="+371">+371</option><option
									value="+961">+961</option
								><option value="+266">+266</option><option value="+231">+231</option><option
									value="+218">+218</option
								><option value="+423">+423</option><option value="+370">+370</option><option
									value="+352">+352</option
								><option value="+853">+853</option><option value="+389">+389</option><option
									value="+261">+261</option
								><option value="+265">+265</option><option value="+60">+60</option><option
									value="+960">+960</option
								><option value="+223">+223</option><option value="+356">+356</option><option
									value="+692">+692</option
								><option value="+596">+596</option><option value="+222">+222</option><option
									value="+230">+230</option
								><option value="+262">+262</option><option value="+52">+52</option><option
									value="+691">+691</option
								><option value="+373">+373</option><option value="+377">+377</option><option
									value="+976">+976</option
								><option value="+382">+382</option><option value="+1664">+1664</option><option
									value="+212">+212</option
								><option value="+258">+258</option><option value="+95">+95</option><option
									value="+264">+264</option
								><option value="+674">+674</option><option value="+977">+977</option><option
									value="+31">+31</option
								><option value="+599">+599</option><option value="+687">+687</option><option
									value="+64">+64</option
								><option value="+505">+505</option><option value="+227">+227</option><option
									value="+234">+234</option
								><option value="+683">+683</option><option value="+672">+672</option><option
									value="+1670">+1670</option
								><option value="+47">+47</option><option value="+968">+968</option><option
									value="+92">+92</option
								><option value="+680">+680</option><option value="+970">+970</option><option
									value="+507">+507</option
								><option value="+675">+675</option><option value="+595">+595</option><option
									value="+51">+51</option
								><option value="+63">+63</option><option value="+872">+872</option><option
									value="+48">+48</option
								><option value="+351">+351</option><option value="+1939">+1939</option><option
									value="+974">+974</option
								><option value="+40">+40</option><option value="+7">+7</option><option value="+250"
									>+250</option
								><option value="+262">+262</option><option value="+590">+590</option><option
									value="+290">+290</option
								><option value="+1869">+1869</option><option value="+1758">+1758</option><option
									value="+590">+590</option
								><option value="+508">+508</option><option value="+1784">+1784</option><option
									value="+685">+685</option
								><option value="+378">+378</option><option value="+239">+239</option><option
									value="+966">+966</option
								><option value="+221">+221</option><option value="+381">+381</option><option
									value="+248">+248</option
								><option value="+232">+232</option><option value="+65">+65</option><option
									value="+421">+421</option
								><option value="+386">+386</option><option value="+677">+677</option><option
									value="+252">+252</option
								><option value="+27">+27</option><option value="+211">+211</option><option
									value="+500">+500</option
								><option value="+34">+34</option><option value="+94">+94</option><option
									value="+249">+249</option
								><option value="+597">+597</option><option value="+47">+47</option><option
									value="+268">+268</option
								><option value="+46">+46</option><option value="+41">+41</option><option
									value="+963">+963</option
								><option value="+886">+886</option><option value="+992">+992</option><option
									value="+255">+255</option
								><option value="+66">+66</option><option value="+670">+670</option><option
									value="+228">+228</option
								><option value="+690">+690</option><option value="+676">+676</option><option
									value="+1868">+1868</option
								><option value="+216">+216</option><option value="+90">+90</option><option
									value="+993">+993</option
								><option value="+1649">+1649</option><option value="+688">+688</option><option
									value="+256">+256</option
								><option value="+380">+380</option><option value="+971">+971</option><option
									value="+44">+44</option
								><option value="+598">+598</option><option value="+998">+998</option><option
									value="+678">+678</option
								><option value="+58">+58</option><option value="+1">+1</option><option value="+1284"
									>+1284</option
								><option value="+1340">+1340</option><option value="+681">+681</option><option
									value="+967">+967</option
								><option value="+260">+260</option><option value="+263">+263</option></select
							>
						</div>
					</div></label
				>
			</div>
			<div class="text-base flex flex-col col-span-12 sm:col-span-12">
				<label for="comments" class="flex flex-col gap-y-2 label-border-b"
					><span class="input-label">Nội dung *</span>
					<textarea
						id="comments"
						placeholder="Vui lòng điền nội dung.."
						name="comments"
						autocomplete=""
						rows="5"
						required
					></textarea></label
				>
			</div>
			<div class="text-base col-span-12">
				<div class="flex gap-8 mt-3">
					<label class="inline-flex justify-center items-center gap-3 text-inherit"
						><input
							type="checkbox"
							name="subscribe"
							value="true"
							class="h-6 w-6 rounded border-inherit text-light-green focus:outline-none focus:ring-light-green"
						/> <span>Thông báo cho tôi biết khi có thông tin mới về Lemy</span></label
					>
				</div>
				<div class="cf-turnstile my-4" data-sitekey="0x4AAAAAAAgio8_xrV5kd7th"></div>
			</div>
			<div class="col-span-12 justify-self-center">
				<button class="button button-primary" type="submit"
					><span>Gửi</span>
					<svg
						class="icon fill-current icon w-4 h-4"
						viewBox="0 0 512 512"
						focusable="false"
						id="icon_arrow-right-long"
						role="img"
						aria-hidden="true"
						aria-label="icon_arrow-right-long"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M507.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-144-144c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l441.4 0L340.7 388.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l144-144z"
						></path></svg
					></button
				>
			</div>
		</form>
	</div>
</section>
