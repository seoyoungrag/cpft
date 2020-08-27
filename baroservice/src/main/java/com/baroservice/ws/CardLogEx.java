
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>CardLogEx complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="CardLogEx"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="CorpNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CardNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="UseKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="UseDT" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CardApprovalType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CardApprovalNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CardApprovalCost" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Amount" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Tax" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ServiceCharge" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TotalAmount" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="UseStoreNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="UseStoreCorpNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="UseStoreName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="UseStoreCeo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="UseStoreAddr" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="UseStoreBizType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="UseStoreTel" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="UseStoreTaxType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CardLogEx", propOrder = {
    "corpNum",
    "cardNum",
    "useKey",
    "useDT",
    "cardApprovalType",
    "cardApprovalNum",
    "cardApprovalCost",
    "amount",
    "tax",
    "serviceCharge",
    "totalAmount",
    "useStoreNum",
    "useStoreCorpNum",
    "useStoreName",
    "useStoreCeo",
    "useStoreAddr",
    "useStoreBizType",
    "useStoreTel",
    "useStoreTaxType"
})
public class CardLogEx {

    @XmlElement(name = "CorpNum")
    protected String corpNum;
    @XmlElement(name = "CardNum")
    protected String cardNum;
    @XmlElement(name = "UseKey")
    protected String useKey;
    @XmlElement(name = "UseDT")
    protected String useDT;
    @XmlElement(name = "CardApprovalType")
    protected String cardApprovalType;
    @XmlElement(name = "CardApprovalNum")
    protected String cardApprovalNum;
    @XmlElement(name = "CardApprovalCost")
    protected String cardApprovalCost;
    @XmlElement(name = "Amount")
    protected String amount;
    @XmlElement(name = "Tax")
    protected String tax;
    @XmlElement(name = "ServiceCharge")
    protected String serviceCharge;
    @XmlElement(name = "TotalAmount")
    protected String totalAmount;
    @XmlElement(name = "UseStoreNum")
    protected String useStoreNum;
    @XmlElement(name = "UseStoreCorpNum")
    protected String useStoreCorpNum;
    @XmlElement(name = "UseStoreName")
    protected String useStoreName;
    @XmlElement(name = "UseStoreCeo")
    protected String useStoreCeo;
    @XmlElement(name = "UseStoreAddr")
    protected String useStoreAddr;
    @XmlElement(name = "UseStoreBizType")
    protected String useStoreBizType;
    @XmlElement(name = "UseStoreTel")
    protected String useStoreTel;
    @XmlElement(name = "UseStoreTaxType")
    protected int useStoreTaxType;

    /**
     * corpNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCorpNum() {
        return corpNum;
    }

    /**
     * corpNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCorpNum(String value) {
        this.corpNum = value;
    }

    /**
     * cardNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardNum() {
        return cardNum;
    }

    /**
     * cardNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardNum(String value) {
        this.cardNum = value;
    }

    /**
     * useKey �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUseKey() {
        return useKey;
    }

    /**
     * useKey �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUseKey(String value) {
        this.useKey = value;
    }

    /**
     * useDT �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUseDT() {
        return useDT;
    }

    /**
     * useDT �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUseDT(String value) {
        this.useDT = value;
    }

    /**
     * cardApprovalType �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardApprovalType() {
        return cardApprovalType;
    }

    /**
     * cardApprovalType �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardApprovalType(String value) {
        this.cardApprovalType = value;
    }

    /**
     * cardApprovalNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardApprovalNum() {
        return cardApprovalNum;
    }

    /**
     * cardApprovalNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardApprovalNum(String value) {
        this.cardApprovalNum = value;
    }

    /**
     * cardApprovalCost �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardApprovalCost() {
        return cardApprovalCost;
    }

    /**
     * cardApprovalCost �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardApprovalCost(String value) {
        this.cardApprovalCost = value;
    }

    /**
     * amount �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAmount() {
        return amount;
    }

    /**
     * amount �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAmount(String value) {
        this.amount = value;
    }

    /**
     * tax �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTax() {
        return tax;
    }

    /**
     * tax �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTax(String value) {
        this.tax = value;
    }

    /**
     * serviceCharge �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getServiceCharge() {
        return serviceCharge;
    }

    /**
     * serviceCharge �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setServiceCharge(String value) {
        this.serviceCharge = value;
    }

    /**
     * totalAmount �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTotalAmount() {
        return totalAmount;
    }

    /**
     * totalAmount �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTotalAmount(String value) {
        this.totalAmount = value;
    }

    /**
     * useStoreNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUseStoreNum() {
        return useStoreNum;
    }

    /**
     * useStoreNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUseStoreNum(String value) {
        this.useStoreNum = value;
    }

    /**
     * useStoreCorpNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUseStoreCorpNum() {
        return useStoreCorpNum;
    }

    /**
     * useStoreCorpNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUseStoreCorpNum(String value) {
        this.useStoreCorpNum = value;
    }

    /**
     * useStoreName �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUseStoreName() {
        return useStoreName;
    }

    /**
     * useStoreName �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUseStoreName(String value) {
        this.useStoreName = value;
    }

    /**
     * useStoreCeo �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUseStoreCeo() {
        return useStoreCeo;
    }

    /**
     * useStoreCeo �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUseStoreCeo(String value) {
        this.useStoreCeo = value;
    }

    /**
     * useStoreAddr �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUseStoreAddr() {
        return useStoreAddr;
    }

    /**
     * useStoreAddr �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUseStoreAddr(String value) {
        this.useStoreAddr = value;
    }

    /**
     * useStoreBizType �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUseStoreBizType() {
        return useStoreBizType;
    }

    /**
     * useStoreBizType �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUseStoreBizType(String value) {
        this.useStoreBizType = value;
    }

    /**
     * useStoreTel �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUseStoreTel() {
        return useStoreTel;
    }

    /**
     * useStoreTel �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUseStoreTel(String value) {
        this.useStoreTel = value;
    }

    /**
     * useStoreTaxType �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getUseStoreTaxType() {
        return useStoreTaxType;
    }

    /**
     * useStoreTaxType �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setUseStoreTaxType(int value) {
        this.useStoreTaxType = value;
    }

}
