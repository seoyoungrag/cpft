
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="GetMonthlyBankAccountLogExResult" type="{http://ws.baroservice.com/}PagedBankAccountLogEx" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "getMonthlyBankAccountLogExResult"
})
@XmlRootElement(name = "GetMonthlyBankAccountLogExResponse")
public class GetMonthlyBankAccountLogExResponse {

    @XmlElement(name = "GetMonthlyBankAccountLogExResult")
    protected PagedBankAccountLogEx getMonthlyBankAccountLogExResult;

    /**
     * getMonthlyBankAccountLogExResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedBankAccountLogEx }
     *     
     */
    public PagedBankAccountLogEx getGetMonthlyBankAccountLogExResult() {
        return getMonthlyBankAccountLogExResult;
    }

    /**
     * getMonthlyBankAccountLogExResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedBankAccountLogEx }
     *     
     */
    public void setGetMonthlyBankAccountLogExResult(PagedBankAccountLogEx value) {
        this.getMonthlyBankAccountLogExResult = value;
    }

}
