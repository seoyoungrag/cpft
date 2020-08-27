
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>CorpState complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="CorpState"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="CorpNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TaxType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="State" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="StateDate" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="BaseDate" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CorpState", propOrder = {
    "corpNum",
    "taxType",
    "state",
    "stateDate",
    "baseDate"
})
public class CorpState {

    @XmlElement(name = "CorpNum")
    protected String corpNum;
    @XmlElement(name = "TaxType")
    protected int taxType;
    @XmlElement(name = "State")
    protected int state;
    @XmlElement(name = "StateDate")
    protected String stateDate;
    @XmlElement(name = "BaseDate")
    protected String baseDate;

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
     * taxType �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getTaxType() {
        return taxType;
    }

    /**
     * taxType �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setTaxType(int value) {
        this.taxType = value;
    }

    /**
     * state �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getState() {
        return state;
    }

    /**
     * state �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setState(int value) {
        this.state = value;
    }

    /**
     * stateDate �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStateDate() {
        return stateDate;
    }

    /**
     * stateDate �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStateDate(String value) {
        this.stateDate = value;
    }

    /**
     * baseDate �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBaseDate() {
        return baseDate;
    }

    /**
     * baseDate �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBaseDate(String value) {
        this.baseDate = value;
    }

}
